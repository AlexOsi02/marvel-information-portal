import {useEffect, useRef, useState} from "react";
import './charactersList.scss'
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";
import PropTypes from "prop-types";
import useMarvelService from "../../services/MarvelService";

const CharactersList = (props) => {
    const [charList, setCharList] = useState([]);
    const [newItemsLoading, setNewItemsLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);

    const {loading, error, getAllCharacters} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
    }, [])

    const onRequest = (offset, initial) => {
        initial ? setNewItemsLoading(false) : setNewItemsLoading(true);
        getAllCharacters(offset)
            .then(onCharListLoaded)
    }

    const onCharListLoaded = (newCharList) => {
        if (newCharList.length < 9) setCharEnded(true);

        setCharList(charList => [...charList, ...newCharList]);
        setNewItemsLoading(false);
        setOffset(offset => offset + 9)
    }

    const itemsRef = useRef([]);

    const onFocusItem = (id) => {
        itemsRef.current.forEach(item => item.classList.remove('charactersList__item_selected'));
        itemsRef.current[id].classList.add('charactersList__item_selected');
        itemsRef.current[id].focus();
    }


    function renderItems(arr) {
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
                    ref={ref => itemsRef.current[i] = ref}
                    onClick={() => {
                        props.onCharSelected(item.id);
                        onFocusItem(i);
                    }}
                    onKeyPress={e => {
                        if (e.key === ' ' || e.key === 'Enter') {
                            props.onCharSelected(item.id);
                            onFocusItem(i);
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

    const items = renderItems(charList);

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading && !newItemsLoading ? <Spinner/> : null;

    return (
        <div className="charactersList">
            {errorMessage}
            {spinner}
            {items}
            <button
                className="button button__main button__long"
                disabled={newItemsLoading}
                style={{"display": charEnded ? "none" : "block"}}
                onClick={() => onRequest(offset)}
            >
                <div className="inner">LOAD MORE</div>
            </button>
        </div>
    )

}

CharactersList.propTypes = {
    onCharSelected: PropTypes.func.isRequired,

}

export default CharactersList;