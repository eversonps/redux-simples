import {createStore, combineReducers} from "redux"
import numeros from "./reducers/numeros"

import numerosReducers from "./reducers/numeros"

const reducers = combineReducers({
    numeros: numerosReducers,

    nomes: function(state, action){
        console.log("Reducers nome")
        return [
            "Ana", 
            "Bia",
            "Carlos"
        ]
    }
})

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig