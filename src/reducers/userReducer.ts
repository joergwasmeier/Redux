const userReducer = (state:any = {}, action) => {
    const newState = {...state};
    console.log(action);
    switch (action.type){
        case "CHANGE_NAME":
            newState.name = action.payLoad;
            break;
        case "CHANGE_AGE":
            newState.age = action.payLoad;
            break;
    }
    return newState;
};

export default userReducer;