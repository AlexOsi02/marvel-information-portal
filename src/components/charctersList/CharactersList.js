import {Component} from "react";
import MarvelService from "../../services/MarvelService";

import './charactersList.scss'
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";

class CharactersList extends Component {
    state = {
        charList: [],
        loading: true,
        error: false
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.marvelService.getAllCharacters()
            .then(this.onCharListLoaded)
            .catch(this.onError)
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    onCharListLoaded = (charList) => {
        this.setState({
            charList,
            loading: false
        })
    }

    renderItems(arr) {
         const items = arr.map((item) => {
             let imgStyle = {'objectFit': 'cover'}

             if(item.thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"){
                 imgStyle = {'objectFit': 'unset' };
             }
            return (
                <li className="charactersList__item" key={item.id}>
                    <img src={item.thumbnail} alt="" style={imgStyle}/>
                    <div className="charactersList__name">{item.name}</div>
                </li>
            )
        })
        return (
            <ul className="charactersList__wrapper">
                {items}
            </ul>
        );
    }

    render() {
        const {charList, loading, error} = this.state;

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? this.renderItems(charList) : null;

        return (
            <div className="charactersList">
                    {errorMessage}
                    {spinner}
                    {content}
                <button className="button button__main button__long">
                    <div className="inner">LOAD MORE</div>
                </button>
            </div>
        )
    }
}

export default CharactersList;