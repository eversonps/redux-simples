import React from "react"
import Card from "./Card"

export default props => {
    const {min, max} = props

    return (
        <Card title="Média dos Numeros" blue>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{5}</strong>
                </span>
            </div>
        </Card>
    )
}