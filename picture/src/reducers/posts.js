const reducer = (state = [],action) => {


    switch(action.type){
        case'FETCH_ALL':
          return action.payload;
        case 'Create':
          return [...state, action.payload]
        default:
            return state
             break;
         



    }
}

export default reducer
