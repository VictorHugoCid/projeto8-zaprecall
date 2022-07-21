import React from "react";

import FirstPage from "./FirstPage";
import Main from "./Main.js"



export default function App() {
    const [logged, setLogged] = React.useState(true);
    console.log("chamou")

    return (
        <>
            {logged ? ( 
                <FirstPage  logged={logged} setLogged={setLogged} />
            ): (
                <Main />
            )}
        </>
    )
}