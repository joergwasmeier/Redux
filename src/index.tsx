import {createStore} from 'redux';

/*
ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
*/

const reducer = (state, action) => {
    if (action.type == "INCRMENT"){
        return state+1;
    }

    if (action.type == "DENCRMENT"){
        return state-1;
    }

    return state;
};

const store = createStore(reducer, 0);

store.subscribe(() => {
    console.log("store changed", store.getState());
});

store.dispatch({type:"INCRMENT", payload:1});
store.dispatch({type:"INCRMENT", payload:1});
store.dispatch({type:"INCRMENT", payload:1});
store.dispatch({type:"DENCRMENT", payload:1});
