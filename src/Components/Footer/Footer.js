import './Footer.css'
import Icon from '../Icon/Icon'
import data from '../data/data'

export default function Footer({cardStatus, verifyFinalAnswer}) {

    return (
        <div className="footer">
            {verifyFinalAnswer()}

            <p>{cardStatus.length}/{data.length} CONCLUÍDOS</p>

             <div className="icons">
                 {cardStatus.map(value => <Icon answer={value.status}/>)}
            </div>

        </div>
    )
}