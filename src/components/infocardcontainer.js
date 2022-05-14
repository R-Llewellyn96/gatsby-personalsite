import React from "react"
import * as containerStyles from "./styles.css"

export default function Infocardcontainer({ children }) {
    return (
        <div className={containerStyles.container}>
                { children }
        </div>
    )

}