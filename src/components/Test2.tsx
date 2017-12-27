import * as React from 'react';

interface ITest2Props {
    children?: any
}

export default class Test2 extends React.PureComponent<ITest2Props> {
    render() {
        console.log("Test2 render");
        return (
            <div>
                Test2
            </div>
        );
    }
}