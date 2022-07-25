import React from 'react'
import './Main.css'
import logo from '../images/logo.png'

import Card from "../Card/Card"
import Footer from "../Footer/Footer"

export default function Main() {

    const arrayQuestions = [
        {
            pergunta: 'O que é JSX?',
            resposta: 'Uma extensão de linguagem do JavaScript'
        },{
            pergunta: 'O React é __',
            classePergunta: "question ",
            resposta: 'uma biblioteca JavaScript para construção de interfacespt'
        },{
            pergunta: 'Componentes devem iniciar com __',
            resposta: 'Letra maiúscula'
        },{
            pergunta: 'Podemos colocar __ dentro do JSX?',
            resposta: 'expressões'
        },{
            pergunta: 'O ReactDOM nos ajuda __',
            resposta: 'interagindo com a DOM para colocar componentes React na mesma'
        },{
            pergunta: 'Usamos o npm para __',
            resposta: 'Usamos props para _'
        },{
            pergunta: 'Usamos props para _',
            resposta: 'passar diferentes informações para componentes '
        },{
            pergunta: 'Usamos estado (state) para __',
            resposta: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
        }
    ]
    const randomDeck = arrayQuestions.sort(() => (Math.random() - 0.5))
    const array4 = []

    for (let i = 0; i < 4; i++) {
        array4.push(randomDeck[i])   
    }
    const [totalAnswer, setTotalAnswer] = React.useState(Number(0))

    
    return (
        <div className="main">
            <div className="header">
                <img src={logo} alt=''/>
                <p> ZapRecall</p>
            </div>

            <ul className="questions">
                <>
                    {array4.map( (arr,index) => {
                    return <Card 
                        pergunta={arr.pergunta}
                        resposta={arr.resposta}
                        index={index} 
                        totalAnswer={totalAnswer} 
                        setTotalAnswer={setTotalAnswer}
                    />} )}

                </>
            </ul>

            <Footer 
                totalAnswer={totalAnswer} 
                setTotalAnswer={setTotalAnswer}
            />

        </div>
    )
}