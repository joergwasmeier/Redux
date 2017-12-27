const userReducer = (state:any = {
        name:"start"
    }, action) => {
    const newState = {...state};
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