import './Footer.css'

export default function Footer({totalAnswer}) {

    return (
        <div className="footer">
            {/* 0/4 Concluídos */}
            <p><strong>Parabéns</strong></p>
            <p>Você não esqueceu de nenhum flashcard!</p>
            <p>{totalAnswer}/4 CONCLUÍDOS</p>



             <div className="icons">
                
                <ion-icon name="checkmark-circle"></ion-icon>
                <ion-icon name="close-circle"></ion-icon>
                <ion-icon name="help-circle"></ion-icon>
                <ion-icon name="help-circle"></ion-icon>
            </div>

        </div>
    )
}