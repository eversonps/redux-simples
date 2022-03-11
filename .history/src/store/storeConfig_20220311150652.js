import {createStore, combineReducers} from "redux"

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