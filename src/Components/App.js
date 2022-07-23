import React from "react";

import FirstPage from "./FirstPage/FirstPage";
import Main from "./Main/Main"



export default function App() {
    const [logged, setLogged] = React.useState(!true);/* ALTERAR PARA TRUE */

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