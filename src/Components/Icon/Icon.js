
import './Icon.css'

export default function Icon({answer}){
    
    switch (answer) {
        case  '':
        return(
            <ion-icon name="play-outline"></ion-icon>
        )
        case  'check':
        return(
            <ion-icon name="checkmark-circle"></ion-icon>
        )
        case  'wrong':
        return(
            <ion-icon name="close-circle"></ion-icon>
        )
        case  'help':
        return(
            <ion-icon name="help-circle"></ion-icon>
        )
    }
}