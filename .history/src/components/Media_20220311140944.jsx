import React from "react"
import Card from "./Card"
import {connect} from "react-redux"

const Media = props => {
    return (
        <Card title="Média dos Numeros" blue>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{5}</strong>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state){
    return {
        numeros: state.numeros
    }
}

export default connect()(Media)