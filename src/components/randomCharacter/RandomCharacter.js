import {Component} from "react";
import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";

import mjolnir from '../../resources/img/decoration.png'

import './randomCharacter.scss'
import ErrorMessage from "../errorMessage/ErrorMessage";

class RandomCharacter extends Component {
    state = {
        char: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateChar();
    }

    marvelService = new MarvelService();

    onCharLoading = () => {
        this.setState({
            loading: true,
            error: false
        })
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        this.onCharLoading();
        this.marvelService
            .getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    render() {
        const {char, loading, error} = this.state;

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <View char={char}/> : null;

        return (
            <div className="randomCharacter">
                {errorMessage}
                {spinner}
                {content}
                <div className="randomCharacter__random">
                    <p className="randomCharacter__title">Random character for today!
                        <br/>Do you want to get to know him better?</p>
                    <p className="randomCharacter__title">Or choose another one</p>
                    <button
                        className="button button__main"
                        onClick={() => (this.updateChar())}>
                        <div className="inner">TRY IT</div>
                    </button>
                    <img src={mjolnir} alt="mjolnir" className="randomCharacter__decoration"/>
                </div>
            </div>
        )
    }
}

const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki} = char;

    let imgStyle = {'objectFit': 'cover'}

    if(thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"){
        imgStyle = {'objectFit': 'contain' };
    }
    return (
        <div className="randomCharacter__block">
            <img style={imgStyle} src={thumbnail} alt="Random character"/>
            <div className="randomCharacter__info">
                <div className="randomCharacter__name">{name}</div>
                <div className="randomCharacter__description">
                    {description}
                </div>
                <div className="randomCharacter__buttons">
                    <a href={homepage} className="button button__main">
                        <div className="inner">HOMEPAGE</div>
                    </a>
                    <a href={wiki} className="button button__secondary">
                        <div className="inner">WIKI</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RandomCharacter;