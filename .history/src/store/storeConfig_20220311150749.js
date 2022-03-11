import {createStore, combineReducers} from "redux"

import numerosReducers from "./reducers/numeros"

const reducers = combineReducers({
    numeros: {
    },

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