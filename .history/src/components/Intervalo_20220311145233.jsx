import "./Intervalo.css"
import React from "react"
import Card from "./Card"
import { connect } from "react-redux"
import { alterarNumeroMinimo , alterarNumeroMaximo} from "../store/actions/numeros"

const Intervalo = props => {
    const {min, max} = props

    return (
        <Card title="Intervalo de Numeros" red>
            <div className="Intervalo">
                <span>
                    <strong>Minimo:</strong>
                    <input type="number" value={min} readOnly onChange={e => props.alterarMinimo(+e.target.value)}/>
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

function mapActionCreatorsToProps(dispatch){
    return {
       alterarMinimo(novoNumero){
           const action = alterarNumeroMinimo(novoNumero)
           dispatch(action)
       }
    }
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(Intervalo)
