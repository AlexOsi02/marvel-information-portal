import AppHeader from "../appHeader/AppHeader";
import './app.scss';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {ComicsPage, MainPage} from "../pages";

const App = () => {
    return (
       <Router>
           <div className="app">
               <AppHeader/>
               <Routes>
                   <Route path="/" element={<MainPage/>}/>
                   <Route path="/comics" element={<ComicsPage/>}/>
               </Routes>
           </div>
       </Router>
    );
}


export default App;
