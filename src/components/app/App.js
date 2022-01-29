import './app.scss';
import AppHeader from "../appHeader/AppHeader";
import RandomCharacter from "../randomCharacter/RandomCharacter";
import CharactersList from "../charctersList/CharactersList";
import CharacterInfo from "../characterInfo/CharacterInfo";
import vision from "../../resources/img/bg-asset.png";
import {useState} from "react";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const App = () => {
    const [selectedChar, setSelectedChar] = useState(null);

    const onCharSelected = (id) => {
        setSelectedChar(id);
    }

    return (
        <div className="app">
            <AppHeader/>
            <main>
                <ErrorBoundary>
                    <RandomCharacter/>
                </ErrorBoundary>
                <div className="characters__content">
                    <ErrorBoundary>
                        <CharactersList onCharSelected={onCharSelected}/>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <CharacterInfo charId={selectedChar}/>
                    </ErrorBoundary>
                </div>
                <img className="bg-decoration" src={vision} alt="vision"/>
            </main>
        </div>
    );
}


export default App;
