import React from 'react'
import './Card.css'

import setinha from '../images/setinha.png'

import Icon from '../Icon/Icon.js'

export default function Card({ pergunta, resposta, index, getCardStatus }) {

    const [flipped, setFlipped] = React.useState('flashCard')
    const [answer, setAnswer] = React.useState('')
    const [classe, setClasse] = React.useState('question')


        switch (flipped) {
            case 'flashCard':
                return (
                    <div className={classe} onClick={() => setFlipped('faceUp')}>
                        Pergunta {index +1}
                        <Icon answer={answer}/>
                    </div>)
    
            
            case 'faceUp':
                return(
                    <div className="questionOpen">
                        <div className="answer">
                            {pergunta}
                        </div>
    
                        <img src={setinha} alt='' onClick={() => setFlipped('faceDown')} />
                    </div>)
                
                
    
            case 'faceDown':
                return (
                    <li className="questionOpen">
                        <div className="answer">
                            {resposta}
                        </div>
    
                        <ul className="choices">
                            <li className="naoLembrei" onClick={() => {
                                return (
                                    setFlipped('flashCard'),
                                    setAnswer('wrong'),
                                    setClasse("question red"),
                                    getCardStatus(index, 'wrong')
                                    
                                    )}}>
                                Não lembrei.
                            </li>

                            <li className="quaseLembrei" onClick={() => {
                                return (
                                    setFlipped('flashCard'),
                                    setAnswer('help'),
                                    setClasse("question orange"),
                                    getCardStatus(index, 'help')

                                    )}}>
                                Quase não lembrei.
                            </li>
                            <li className="zap" onClick={() => {
                                return (
                                    setFlipped('flashCard'),
                                    setAnswer('check'),
                                    setClasse("question green"),
                                    getCardStatus(index, 'check')

                                    )}}>
                                Zap!
                            </li>
    
                        </ul>
                    </li>)
                
                
        }

}
