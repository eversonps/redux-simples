import "./Intervalo.css"
import React from "react"
import Card from "./Card"

export default props => {
    const {min, max} = props

    return (
        <Card title="Intervalo de Numeros" red>
            <div className="Intervalo">
                <span>
                    <strong>Minimo:</strong>
                    <input type="number" value={min} readOnly onChange={e => props.onMinChanged}/>
                </span>

                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max} readOnly onChange={e => props.onMaxChanged}/>
                </span>
            </div>
        </Card>
    )
}