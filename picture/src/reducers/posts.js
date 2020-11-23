const reducer = (state = [],action) => {


    switch(action.type){
        case'FETCH_ALL':
          return action.payload;
        case 'Create':
          return state;
        default:
            return state
             break;
         



    }
}

export default reducer
