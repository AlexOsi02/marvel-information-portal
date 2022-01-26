import {Component} from "react";
import MarvelService from "../../services/MarvelService";

import './charactersList.scss'
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";
import PropTypes from "prop-types";

class CharactersList extends Component {
    state = {
        charList: [],
        loading: true,
        error: false,
        newItemsLoading: false,
        offset: 210,
        charEnded: false
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.onRequest();
    }

    onRequest = (offset) => {
        this.onCharListLoading();
        this.marvelService.getAllCharacters(offset)
            .then(this.onCharListLoaded)
            .catch(this.onError)
    }

    onCharListLoading = () => {
        this.setState({
            newItemsLoading: true
        })
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    onCharListLoaded = (newCharList) => {
        if (newCharList.length < 9) {
            this.setState(() => ({charEnded: true}))
        }

        this.setState(({charList, offset}) => ({
            charList: [...charList, ...newCharList],
            loading: false,
            newItemsLoading: false,
            offset: offset + 9,
        }))
    }

    itemsRef = [];

    setRef = (ref) => {
        this.itemsRef.push(ref);
    }

    onFocusItem = (id) => {
        this.itemsRef.forEach(item => item.classList.remove('charactersList__item_selected'));
        this.itemsRef[id].classList.add('charactersList__item_selected');
        this.itemsRef[id].focus();
    }


    renderItems(arr) {
        console.log(this.itemsRef)
        const items = arr.map((item, i) => {
            let imgStyle = {'objectFit': 'cover'}

            if (item.thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg") {
                imgStyle = {'objectFit': 'unset'};
            }
            return (
                <li
                    className="charactersList__item"
                    key={item.id}
                    tabIndex={0}
                    ref={this.setRef}
                    onClick={() => {
                        this.props.onCharSelected(item.id);
                        this.onFocusItem(i);
                    }}
                    onKeyPress={e => {
                        if (e.key === ' ' || e.key === 'Enter') {
                            this.props.onCharSelected(item.id);
                            this.onFocusItem(i);
                        }

                    }}
                >
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
        const {charList, loading, error, newItemsLoading, offset, charEnded} = this.state;

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? this.renderItems(charList) : null;

        return (
            <div className="charactersList">
                {errorMessage}
                {spinner}
                {content}
                <button
                    className="button button__main button__long"
                    disabled={newItemsLoading}
                    style={{"display": charEnded ? "none" : "block"}}
                    onClick={() => this.onRequest(offset)}
                >
                    <div className="inner">LOAD MORE</div>
                </button>
            </div>
        )
    }
}

CharactersList.propTypes = {
    onCharSelected: PropTypes.func.isRequired,

}

export default CharactersList;