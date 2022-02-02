import "./comicsList.scss";
import useMarvelService from "../../services/MarvelService";
import {useEffect, useState} from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";
import {Link} from "react-router-dom";

const ComicsList = () => {
    const [comicsList, setComicsList] = useState([]);
    const [offset, setOffset] = useState(200);
    const [comicsEnded, setComicsEnded] = useState(false);
    const [newItemsLoading, setNewItemsLoading] = useState(false)

    const {loading, error, getAllComics} = useMarvelService();

    useEffect(() => {
      onRequest(offset, true);
    }, []);

    const onRequest = (offset, initial) =>{
        initial ? setNewItemsLoading(false) : setNewItemsLoading(true);
        getAllComics(offset)
            .then(onComicsListLoaded)
    }

    const onComicsListLoaded = (newComicsList) =>{
        if (newComicsList.length < 8) setComicsEnded(true);

        setComicsList(comicsList => [...comicsList, ...newComicsList]);
        setNewItemsLoading(false);
        setOffset(offset => offset + 8)
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading && ! newItemsLoading ? <Spinner/> : null;
    const content = !(loading && error) ? <View comicsList={comicsList}/> : null;

    return (
        <div className="comics__list">
            {errorMessage}
            {spinner}
            {content}
            <button
                className="button button__main button__long"
                disabled={newItemsLoading}
                style = {{"display": comicsEnded ? "none" : "block"}}
                onClick={() => onRequest(offset)}
            >
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

const View = ({comicsList}) =>{
    return(
        <ul className="comics__grid">
            {comicsList.map((comics, i) => (
                <li className="comics__item" key={i}>
                    <Link to={`/comics/${comics.id}`}>
                        <img src={comics.thumbnail} alt="comics" className="comics__item-img"/>
                        <div className="comics__item-name">{comics.title}</div>
                        <div className="comics__item-price">{comics.price}</div>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default ComicsList;