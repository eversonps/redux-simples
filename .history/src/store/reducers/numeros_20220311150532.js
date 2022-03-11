const initialState = {
    min: 7,
    max: 60
}

export default function(state, action){
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
                max: 60
            }
    }
}