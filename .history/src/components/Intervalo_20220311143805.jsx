import "./Intervalo.css"
import React from "react"
import Card from "./Card"
import { connect } from "react-redux"
import { alterarNumeroMinimo } from "../store/actions/numeros"

const Intervalo = props => {
    const {min, max} = props

    return (
        <Card title="Intervalo de Numeros" red>
            <div className="Intervalo">
                <span>
                    <strong>Minimo:</strong>
                    <input type="number" value={min} readOnly/>
                </span>

                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max} readOnly/>
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

function mapActionsCreators(){
    
}

export default connect(mapStateToProps)(Intervalo)
