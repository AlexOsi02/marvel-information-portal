import './app.scss';
import AppHeader from "../appHeader/AppHeader";
import RandomCharacter from "../randomCharacter/RandomCharacter";
import CharactersList from "../charctersList/CharactersList";
import CharacterInfo from "../characterInfo/CharacterInfo";
import vision from "../../resources/img/bg-asset.png";

function App() {
    return (
        <div className="app">
            <AppHeader/>
            <main>
                <RandomCharacter/>
                <div className="characters__content">
                    <CharactersList/>
                    <CharacterInfo/>
                </div>
                <img className="bg-decoration" src={vision} alt="vision"/>
            </main>
        </div>
    );
}

export default App;
