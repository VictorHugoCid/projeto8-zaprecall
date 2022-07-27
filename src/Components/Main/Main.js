import React from 'react'
import './Main.css'
import logo from '../images/logo.png'

import data from "../data/data"
import Card from "../Card/Card"
import Footer from "../Footer/Footer"

export default function Main() {

    data.sort(() => (Math.random() - 0.5))
    const [cardStatus, setCardStatus] = React.useState([])

    function getCardStatus(cardIndex, status) {
        if (cardStatus.some((value) => value.index === cardIndex)) {
            return;
        }
        setCardStatus([
            ...cardStatus,
            {
                index: cardIndex,
                status: status,
            },
        ]);

    }

    function verifyFinalAnswer() {

        if (cardStatus.length === data.length) {
            return (
                <div>
                    {cardStatus.some((value) => value.status === 'wrong')
                        ? 'deu ruim aí hein...vamos estudar mais?'
                        : 'Ce é o bixão mermo hein...'}
                </div>
            );
        }

    }

    return (
        <div className="main">
            <div className="header">
                <img src={logo} alt='' />
                <p> ZapRecall</p>
            </div>

            <div className="questions">
                {data.map((arr, index) => {
                    return (
                    <Card
                        key={index}
                        pergunta={arr.pergunta}
                        resposta={arr.resposta}
                        index={index}
                        getCardStatus={getCardStatus}
                        verifyFinalAnswer={verifyFinalAnswer}
                    />)
                })}
            </div>

            <Footer
                cardStatus={cardStatus}
                verifyFinalAnswer={verifyFinalAnswer}
            />
        </div>
    )
}