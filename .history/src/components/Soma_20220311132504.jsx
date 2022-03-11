import React from "react"
import Card from "./Card"

export default props => {
    const {min, max} = props
    
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