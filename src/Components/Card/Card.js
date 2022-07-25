import React from 'react'
import './Card.css'

import setinha from '../images/setinha.png'

import Icon from '../Icon/Icon.js'

export default function Card({ pergunta, resposta, index, totalAnswer, setTotalAnswer }) {

    const [flipped, setFlipped] = React.useState('flashCard')
    const [answer, setAnswer] = React.useState('')
    const [classe, setClasse] = React.useState('question')

    function changeStyle(){
        /* alert("chamou") */
    }
        switch (flipped) {
            case 'flashCard':
                return (
                    <li className={classe} onClick={() => setFlipped('faceUp')}>
                        Pergunta {index +1}
                        <Icon answer={answer}/>
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
                            {resposta}
                        </div>
    
                        <ul className="choices">
                            <li className="naoLembrei" onClick={() => {
                                return (
                                    setFlipped('flashCard'),
                                    setAnswer('wrong'),
                                    setTotalAnswer(totalAnswer + 1),
                                    setClasse("question red")

                                    )}}>
                                Não lembrei.
                            </li>

                            <li className="quaseLembrei" onClick={() => {
                                return (
                                    setFlipped('flashCard'),
                                    setAnswer('help'),
                                    setTotalAnswer(totalAnswer + 1),
                                    setClasse("question orange")

                                    )}}>
                                Quase não lembrei.
                            </li>
                            <li className="zap" onClick={() => {
                                return (
                                    setFlipped('flashCard'),
                                    setAnswer('check'),
                                    setTotalAnswer(totalAnswer + 1),
                                    setClasse("question green")

                                    )}}>
                                Zap!
                            </li>
    
                        </ul>
                    </li>)
                
                
        }

}