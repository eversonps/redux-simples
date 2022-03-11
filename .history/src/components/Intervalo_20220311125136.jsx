import "./Intervalo.css"
import React from "react"
import Card from "./Card"

export default props => {
    return (
        <Card title="Intervalo de Numeros">
            <span>
                <strong>Minimo</strong>
                <input type="number" />
            </span>
        </Card>
    )
}