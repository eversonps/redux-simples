import React from "react"
import Card from "./Card"

import { connect } from "react-redux"

const soma = props => {
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

function mapStateToProps(state){
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}