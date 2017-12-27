const userReducer = (state:any = {}, action) => {
    const newState = {...state};

    switch (action.type){
        case "CHANGE_NAME":
            newState.name = action.payload;
            break;
        case "CHANGE_AGE":
            newState.age = action.payload;
            break;
    }
    return newState;
};

export default userReducer;