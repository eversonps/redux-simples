import React from "react"
import Card from "./Card"

export default props => {
    const {min, max} = props
    const Aleatorio = parseInt(Math.random() * (max - min)) + min

    return (
        <Card title="Sorteio de um Numero" green>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong></strong>
                </span>
            </div>
        </Card>
    )
}