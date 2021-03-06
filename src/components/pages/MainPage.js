import {useState} from "react";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import RandomCharacter from "../randomCharacter/RandomCharacter";
import CharactersList from "../charctersList/CharactersList";
import CharacterInfo from "../characterInfo/CharacterInfo";
import vision from "../../resources/img/bg-asset.png";
import CharacterSearchForm from "../characterSearchForm/CharacterSearchForm";


const MainPage = () => {
    const [selectedChar, setSelectedChar] = useState(null);

    const onCharSelected = (id) => {
        setSelectedChar(id);
    }
    return (
        <main>
            <ErrorBoundary>
                <RandomCharacter/>
            </ErrorBoundary>
            <div className="characters__content">
                <ErrorBoundary>
                    <CharactersList onCharSelected={onCharSelected}/>
                </ErrorBoundary>
                <div>
                    <ErrorBoundary>
                        <CharacterInfo charId={selectedChar}/>
                    </ErrorBoundary>
                    <CharacterSearchForm/>
                </div>
            </div>
            <img className="bg-decoration" src={vision} alt="vision"/>
        </main>
    )
}

export default MainPage;