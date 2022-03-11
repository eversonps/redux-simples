import "./Intervalo.css"
import React from "react"
import Card from "./Card"
import { connect } from "react-redux"

const Intervalo = props => {
    const {min, max} = props
    
    return (
        <Card title="Intervalo de Numeros" red>
            <div className="Intervalo">
                <span>
                    <strong>Minimo:</strong>
                    <input type="number" value={0} readOnly/>
                </span>

                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={10} readOnly/>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state){
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Intervalo)
