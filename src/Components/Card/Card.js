import React from 'react'
import './Card.css'

import setinha from '../images/setinha.png'

import Icon from '../Icon/Icon.js'

export default function Card({ pergunta, index }) {

    const [flipped, setFlipped] = React.useState('flashCard')
    const [answer, setAnswer] = React.useState('')

        switch (flipped) {
            case 'flashCard':
                return (
                    <li className="question" onClick={() => setFlipped('faceUp')}>
                        Pergunta {index +1}
                        <Icon answer={answer} setAnswer={setAnswer}/>
                    </li>)
    
            
            case 'faceUp':
                return(
                    <li className="questionOpen">
                        <div className="answer">
                            {pergunta}
                        </div>
    
                        <img src={setinha} alt='' onClick={() => setFlipped('faceDown')} />
                    </li>)
                
                
    
            case 'faceDown':
                return (
                    <li className="questionOpen">
                        <div className="answer">
                            {pergunta}
                        </div>
    
                        <ul className="choices">
                            <li className="naoLembrei" onClick={() => {
                                return (
                                    setFlipped('flashCard'),
                                    setAnswer('wrong')

                                    )}}>
                                Não lembrei.
                            </li>

                            <li className="quaseLembrei" onClick={() => {
                                return (
                                    setFlipped('flashCard'),
                                    setAnswer('help')

                                    )}}>
                                Quase não lembrei.
                            </li>
                            <li className="zap" onClick={() => {
                                return (
                                    setFlipped('flashCard'),
                                    setAnswer('check')

                                    )}}>
                                Zap!
                            </li>
    
                        </ul>
                    </li>)
                
                
        }

}

/* return (
    <>
        {flipped ? (
            <li className="questionOpen">
                <div className="answer">
                    {pergunta}
                </div>

                <img src={setinha} alt='' onClick={flipCard} />
            </li>
        ) : (
            <li className="question" onClick={() => setFlipped(!flipped)}>
                Pergunta 1
                <ion-icon name="play-outline"></ion-icon>
            </li>
        )}
    </>
) */