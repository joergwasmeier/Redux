import * as React from 'react';

interface ITest1Props {
    children?: any
}

export default class Test1 extends React.PureComponent<ITest1Props> {
    render() {
        return (
            <div>
                Test1
            </div>
        );
    }
}