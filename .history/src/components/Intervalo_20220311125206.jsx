import "./Intervalo.css"
import React from "react"
import Card from "./Card"

export default props => {
    return (
        <Card title="Intervalo de Numeros">
            <span>
                <strong>Minimo</strong>
                <input type="number" value={0}/>
            </span>

            <span>
                <strong>Máximo</strong>
                <input type="number" value={0}/>
            </span>
        </Card>
    )
}