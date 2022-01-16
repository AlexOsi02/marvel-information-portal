import abyss from '../../resources/img/abyss.png'

import './characterInfo.scss'

const CharacterInfo = () => {
    return (
        <div className="characterInfo">
            <div className="characterInfo__title">
                <img src={abyss} alt="character"/>
                <div className="characterInfo__wrapper">
                    <div className="characterInfo__name">abyss</div>
                    <div className="characterInfo__buttons">
                        <button className="button button__main">
                            <div className="inner">HOMEPAGE</div>
                        </button>
                        <button className="button button__secondary">
                            <div className="inner">WIKI</div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="characterInfo__description">
                In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.
            </div>
            <div className="characterInfo__comics">
                <span>Comics:</span>
                <ul className="characterInfo__comics-list">
                    <li className="characterInfo__comics-item"><a href="#">All-Winners Squad: Band of Heroes (2011) #3</a></li>
                    <li className="characterInfo__comics-item"><a href="#">All-Winners Squad: Band of Heroes (2011) #3</a></li>
                    <li className="characterInfo__comics-item"><a href="#">All-Winners Squad: Band of Heroes (2011) #3</a></li>
                    <li className="characterInfo__comics-item"><a href="#">All-Winners Squad: Band of Heroes (2011) #3</a></li>
                    <li className="characterInfo__comics-item"><a href="#">All-Winners Squad: Band of Heroes (2011) #3</a></li>
                    <li className="characterInfo__comics-item"><a href="#">All-Winners Squad: Band of Heroes (2011) #3</a></li>
                    <li className="characterInfo__comics-item"><a href="#">All-Winners Squad: Band of Heroes (2011) #3</a></li>
                    <li className="characterInfo__comics-item"><a href="#">AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)</a></li>
                    <li className="characterInfo__comics-item"><a href="#">AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)</a></li>
                    <li className="characterInfo__comics-item"><a href="#">AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)</a></li>
                </ul>
            </div>
        </div>
    )
}

export default CharacterInfo;