
export function getUsers() {
    return async (dispatch) => {
        const call = await fetch("http://rest.learncode.academy/api/johnbob/friends");
        const data = await call.json();
        console.log(data);
        dispatch(setName(data[63].name));
    };
}

export function setName(name:string) {
   return {type:"CHANGE_NAME", payLoad:name};
}