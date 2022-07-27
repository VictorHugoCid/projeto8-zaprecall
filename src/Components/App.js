import React from "react";

import FirstPage from "./FirstPage/FirstPage";
import Main from "./Main/Main"
/* import styles from '../../public/CSS/styles.css'*/

/* import reset from '../../public/CSS/reset.css'  */



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