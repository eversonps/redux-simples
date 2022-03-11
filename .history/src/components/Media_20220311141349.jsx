import React from "react"
import Card from "./Card"
import {connect} from "react-redux"

const Media = props => {
    const {min, max} = props
    
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
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Media)