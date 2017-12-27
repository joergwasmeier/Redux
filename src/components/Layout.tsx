import * as React from 'react';
import {connect} from 'react-redux';
import {getUsers} from '../actions/userActions';

interface ILayoutProps{
    dispatch?:any;
    userName?:string;
}

@(connect(mapStateToProps) as any)
export default class Layout extends React.PureComponent<ILayoutProps>{

    componentDidMount(){
        this.props.dispatch(getUsers());
    }

    render() {
        return (
            <div>
                Test
                {this.props.userName}
            </div>
        );
    }
}

function mapStateToProps(store : any): ILayoutProps {
    return {
        userName:store.user.name
    };
}
