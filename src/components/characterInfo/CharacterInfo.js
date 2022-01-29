import {useEffect, useState} from "react";
import Skeleton from "../skeleton/Skeleton";

import './characterInfo.scss'
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";
import PropTypes from "prop-types";
import useMarvelService from "../../services/MarvelService";

const CharacterInfo = (props) => {
    const [char, setChar] = useState(null);

    const {loading, error, getCharacter, clearError} = useMarvelService();

    useEffect(() => {
        updateChar();
        //eslint-disable-next-line
    }, [props.charId])

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const updateChar = () => {
        const {charId} = props;
        if (!charId) return;

        clearError();

        getCharacter(charId)
            .then(onCharLoaded)
    }

    const skeleton = char || loading || error ? null : <Skeleton/>;
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !char) ? <View char={char}/> : null;
    return (
        <div className="characterInfo">
            {skeleton}
            {errorMessage}
            {spinner}
            {content}
        </div>
    )
}

const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = char;

    let imgStyle = {'objectFit': 'cover'}

    if (thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg") {
        imgStyle = {'objectFit': 'unset'};
    }

    return (
        <>
            <div className="characterInfo__title">
                <img src={thumbnail} alt="character" style={imgStyle}/>
                <div className="characterInfo__wrapper">
                    <div className="characterInfo__name">{name}</div>
                    <div className="characterInfo__buttons">
                        <a className="button button__main" href={homepage}>
                            <div className="inner">HOMEPAGE</div>
                        </a>
                        <a className="button button__secondary" href={wiki}>
                            <div className="inner">WIKI</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="characterInfo__description">
                {description}
            </div>
            <div className="characterInfo__comics">
                <span>Comics:</span>
                <ul className="characterInfo__comics-list">
                    {comics.length > 0 ? null : 'There is no comics with this character'}
                    {comics.map((item, i) => {
                        // eslint-disable-next-line
                        if (i > 9) return;
                        return <li key={i} className="characterInfo__comics-item">{item.name}</li>
                    })}
                </ul>
            </div>
        </>
    )
}

CharacterInfo.propTypes = {
    charId: PropTypes.number
}

export default CharacterInfo;