import React, {useState} from "react"
import Card from "./Card"

export default props => {
    return (
        <Card title="Soma dos Numeros" purple>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>10</strong>
                </span>
            </div>
        </Card>
    )
}