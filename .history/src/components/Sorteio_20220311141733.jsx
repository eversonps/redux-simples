import React from "react"
import Card from "./Card"
import { connect } from "react-redux"

const Sorteio = props => {
    // const aleatorio = parseInt(Math.random() * (max - min)) + min

    return (
        <Card title="Sorteio de um Numero" green>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{10}</strong>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state){
    return {    
        min: state.numeros.min
        max: state.numeros.max
    }
}

export default connect()