import "./Intervalo.css"
import React from "react"
import Card from "./Card"

export default props => {
    return (
        <Card title="Intervalo de Numeros" red>
            <div className="Intervalo">
                <span>
                    <strong>Minimo:</strong>
                    <input type="number" value={min} onChange={e => props.onMinChanged(+e.target.value)} readOnly/>
                </span>

                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max} onChange={e => props.onMaxChanged(+e.target.value)} readOnly/>
                </span>
            </div>
        </Card>
    )
}