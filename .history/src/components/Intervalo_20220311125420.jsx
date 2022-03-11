import "./Intervalo.css"
import React from "react"
import Card from "./Card"

export default props => {
    return (
        <Card title="Intervalo de Numeros" red>
            <span>
                <strong>Minimo</strong>
                <input type="number" value={0} readOnly/>
            </span>

            <span>
                <strong>Máximo</strong>
                <input type="number" value={10} readOnly/>
            </span>
        </Card>
    )
}