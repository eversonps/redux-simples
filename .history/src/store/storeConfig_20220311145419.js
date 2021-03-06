import {createStore, combineReducers} from "redux"

const reducers = combineReducers({
    numeros: function(state, action){
        console.log("Reducers numeros")
        switch(action.type){
            case "NUM_MIN_ALTERADO":
                return{
                    ...state,
                    min: action.payload
                }
            case "NUM_MAX_ALTERADO":
                return{
                    ...state,
                    max: action.payload
                }
            default:
                return {
                    min: 7,
                    max:60
                }
        }
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