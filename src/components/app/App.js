import './app.scss';
import AppHeader from "../appHeader/AppHeader";
import RandomCharacter from "../randomCharacter/RandomCharacter";
import CharactersList from "../charctersList/CharactersList";
import CharacterInfo from "../characterInfo/CharacterInfo";
import vision from "../../resources/img/bg-asset.png";
import {Component} from "react";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

class App extends Component {
    state = {
        selectedChar: null
    }

    onCharSelected = (id) =>{
        this.setState({
            selectedChar: id
        })
    }

    render() {
        return (
            <div className="app">
                <AppHeader/>
                <main>
                    <ErrorBoundary>
                        <RandomCharacter/>
                    </ErrorBoundary>
                    <div className="characters__content">
                        <ErrorBoundary>
                            <CharactersList onCharSelected={this.onCharSelected}/>
                        </ErrorBoundary>
                        <ErrorBoundary>
                            <CharacterInfo charId={this.state.selectedChar}/>
                        </ErrorBoundary>
                    </div>
                    <img className="bg-decoration" src={vision} alt="vision"/>
                </main>
            </div>
        );
    }
}

export default App;
