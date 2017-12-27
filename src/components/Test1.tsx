import * as React from 'react';
import Test3 from './Test3';

interface ITest1Props {
    children?: any
}

export default class Test1 extends React.PureComponent<ITest1Props> {
    render() {
        console.log("Test1 render");
        return (
            <div>
                Test1
                <Test3/>
            </div>
        );
    }
}