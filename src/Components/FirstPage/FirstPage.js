import './FirstPage.css'
import logo from '../images/logo.png' 

export default function FirstPage({logged, setLogged}){
    return (
        <div className = "firstPage">
            <img src ={logo} alt=''/>
            <p>ZapRecall</p>
            <div 
                className = "button" 
                onClick={() => setLogged(!logged)}>
                Iniciar
            </div>
        </div>
    )
}