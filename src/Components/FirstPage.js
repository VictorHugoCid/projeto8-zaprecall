
export default function FirstPage({logged, setLogged}){
    return (
        <div className = "firstPage">
            <img src = "./images/logo.png" />
            <p>ZapRecall</p>
            <div 
                className = "button" 
                onClick={() => setLogged(!logged)}>
                Iniciar
            </div>
        </div>
    )
}