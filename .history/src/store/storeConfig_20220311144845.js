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
        }
        return {
            min: 8,
            max: 40
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