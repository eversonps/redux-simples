import React from "react"
import Card from "./Card"

export default props => {
    const {min, max} = props
    
    return (
        <Card title="Sorteio de um Numero" green>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>5</strong>
                </span>
            </div>
        </Card>
    )
}