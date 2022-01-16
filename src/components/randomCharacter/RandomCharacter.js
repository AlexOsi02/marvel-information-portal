import './randomCharacter.scss'

import thor from '../../resources/img/thor.png'
import mjolnir from '../../resources/img/decoration.png'

const RandomCharacter = () => {
    return(
        <div className="randomCharacter">
            <div className="randomCharacter__block">
                <img src={thor} alt="Random character"/>
                <div className="randomCharacter__info">
                    <div className="randomCharacter__name">THOR</div>
                    <div className="randomCharacter__description">
                        As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...
                    </div>
                    <div className="randomCharacter__buttons">
                        <a href="#" className="button button__main"><div className="inner">HOMEPAGE</div></a>
                        <a href="#" className="button button__secondary"><div className="inner">WIKI</div></a>
                    </div>
                </div>
            </div>
            <div className="randomCharacter__random">
                <p className="randomCharacter__title">Random character for today!
                    <br/>Do you want to get to know him better?</p>
                <p className="randomCharacter__title">Or choose another one</p>
                <button className="button button__main"><div className="inner">TRY IT</div></button>
                <img src={mjolnir} alt="mjolnir" className="randomCharacter__decoration"/>
            </div>
        </div>
    )
}

export default RandomCharacter;