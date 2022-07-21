
export default function Main() {


    /* <ion-icon name="checkmark-circle"></ion-icon> */
    /* array com perguntas */
    return (
        <div className="main">
            <div className="header">
                <img src="./images/logo.png" />
                <p> ZapRecall</p>
            </div>
            <ul className="questions">
                <li className="question">
                    Pergunta 1
                    <ion-icon name="play-outline"></ion-icon>

                    {/* <div className="answer">
                        JSX é uma sintaxe para
                        escrever HTML dentro do JS
                    </div>

                    <ul className="choices">
                        <li className="naoLembrei">
                            Não lembrei.
                        </li>
                        <li className="quaseLembrei">
                            Quase não lembrei.
                        </li>
                        <li className="zap">
                            Zap!
                        </li>

                    </ul> */}
                </li>
                <li className="question">
                    Pergunta 2
                    <ion-icon name="play-outline"></ion-icon>
                </li>
                <li className="question">
                    Pergunta 3
                    <ion-icon name="play-outline"></ion-icon>
                </li>
                <li className="question">
                    Pergunta 4
                    <ion-icon name="play-outline"></ion-icon>
                </li>

            </ul>

            <div className="footer">
                {/* 0/4 Concluídos */}
                <p><strong>Parabéns</strong></p>
                <p>Você não esqueceu de nenhum flashcard!</p>
                <p>4/4 CONCLUÍDOS</p>
                <div className="icons">
                    <ion-icon name="checkmark-circle"></ion-icon>
                    <ion-icon name="close-circle"></ion-icon>
                    <ion-icon name="help-circle"></ion-icon>
                    <ion-icon name="help-circle"></ion-icon>
                </div>


            </div>


        </div>
    )
}