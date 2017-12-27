import * as React from 'react';

interface ITest3Props {
    children?: any
}

export default class Test3 extends React.PureComponent<ITest3Props> {
    render() {
        console.log("test 3");
        return (
            <div>
                Test3
            </div>
        );
    }
}