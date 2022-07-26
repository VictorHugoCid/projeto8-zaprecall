import React from 'react'
import './Main.css'
import logo from '../images/logo.png'

/* import data from "../data/array" *//* XXXXXXXXXXXXXXXXXXXXXXX */
import Card from "../Card/Card"
import Footer from "../Footer/Footer"

export default function Main() {

    const arrayQuestions = [
        {
            pergunta: 'O que é JSX?',
            resposta: 'Uma extensão de linguagem do JavaScript'
        }, {
            pergunta: 'O React é __',
            classePergunta: "question ",
            resposta: 'uma biblioteca JavaScript para construção de interfacespt'
        }, {
            pergunta: 'Componentes devem iniciar com __',
            resposta: 'Letra maiúscula'
        }, {
            pergunta: 'Podemos colocar __ dentro do JSX?',
            resposta: 'expressões'
        }, {
            pergunta: 'O ReactDOM nos ajuda __',
            resposta: 'interagindo com a DOM para colocar componentes React na mesma'
        }, {
            pergunta: 'Usamos o npm para __',
            resposta: 'Usamos props para _'
        }, {
            pergunta: 'Usamos props para _',
            resposta: 'passar diferentes informações para componentes '
        }, {
            pergunta: 'Usamos estado (state) para __',
            resposta: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
        }
    ]
    const randomDeck = arrayQuestions.sort(() => (Math.random() - 0.5))
    const array4 = []

    for (let i = 0; i < 4; i++) {
        array4.push(randomDeck[i])
    }

    /* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

    const [cardStatus, setCardStatus] = React.useState([])

    function VVcardStatus(cardIndex, status) {
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

        if (cardStatus.length === 4) {
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

            <ul className="questions">
                <>
                    {array4.map((arr, index) => {
                        return <Card
                            key={index}
                            pergunta={arr.pergunta}
                            resposta={arr.resposta}
                            index={index}
                            VVcardStatus={VVcardStatus}
                            verifyFinalAnswer={verifyFinalAnswer}
                        />
                    })}
                </>
            </ul>

            <Footer
                cardStatus={cardStatus}
                verifyFinalAnswer={verifyFinalAnswer}
            />



        </div>
    )
}