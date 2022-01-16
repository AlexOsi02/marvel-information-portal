import './charactersList.scss'

import abyss from '../../resources/img/abyss.png'

const CharactersList = () => {
    return (
        <div className="charactersList">
            <ul className="charactersList__wrapper">
                <li className="charactersList__item">
                    <img src={abyss} alt=""/>
                    <div className="charactersList__name">abyss</div>
                </li>
                <li className="charactersList__item">
                    <img src={abyss} alt=""/>
                    <div className="charactersList__name">abyss</div>
                </li>
                <li className="charactersList__item">
                    <img src={abyss} alt=""/>
                    <div className="charactersList__name">abyss</div>
                </li>
                <li className="charactersList__item">
                    <img src={abyss} alt=""/>
                    <div className="charactersList__name">abyss</div>
                </li>
                <li className="charactersList__item">
                    <img src={abyss} alt=""/>
                    <div className="charactersList__name">abyss</div>
                </li>
                <li className="charactersList__item">
                    <img src={abyss} alt=""/>
                    <div className="charactersList__name">abyss</div>
                </li>
                <li className="charactersList__item">
                    <img src={abyss} alt=""/>
                    <div className="charactersList__name">abyss</div>
                </li>
                <li className="charactersList__item">
                    <img src={abyss} alt=""/>
                    <div className="charactersList__name">abyss</div>
                </li>
                <li className="charactersList__item">
                    <img src={abyss} alt=""/>
                    <div className="charactersList__name">abyss</div>
                </li>
            </ul>

            <button className="button button__main button__long"><div className="inner">LOAD MORE</div></button>
        </div>
    )
}

export default CharactersList;