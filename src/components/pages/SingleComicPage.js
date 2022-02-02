import AppBanner from "../appBanner/AppBanner";
import SingleComic from "../singleComic/SingleComic";
import {useParams} from "react-router-dom";

const SingleComicPage = () => {
    const {comicId} = useParams();
    return (
        <>
            <AppBanner/>
            <SingleComic comicId={comicId}/>
        </>
    )
}

export default SingleComicPage;