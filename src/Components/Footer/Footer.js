import './Footer.css'
import Icon from '../Icon/Icon'

export default function Footer({cardStatus, verifyFinalAnswer}) {

    return (
        <div className="footer">
            {verifyFinalAnswer()}
            
            <p>{cardStatus.length}/4 CONCLUÍDOS</p>

             <div className="icons">
                 {cardStatus.map(value => <Icon answer={value.status}/>)}
            </div>

        </div>
    )
}