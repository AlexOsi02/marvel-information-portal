import {useEffect, useState} from "react";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import useMarvelService from "../../services/MarvelService";

import './randomCharacter.scss'

import mjolnir from '../../resources/img/decoration.png'

const RandomCharacter = () => {
    const [char, setChar] = useState({});
    const {loading, error, getCharacter, clearError} = useMarvelService();

    useEffect(() => {
        updateChar();
    }, [])

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const updateChar = () => {
        clearError();
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        getCharacter(id)
            .then(onCharLoaded)
    }

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
                    onClick={() => (updateChar())}>
                    <div className="inner">TRY IT</div>
                </button>
                <img src={mjolnir} alt="mjolnir" className="randomCharacter__decoration"/>
            </div>
        </div>
    )
}

const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki} = char;

    let imgStyle = {'objectFit': 'cover'}

    if (thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg") {
        imgStyle = {'objectFit': 'contain'};
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