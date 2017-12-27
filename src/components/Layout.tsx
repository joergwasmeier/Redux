import * as React from 'react';
import {connect} from 'react-redux';
import {getUsers} from '../actions/userActions';
import {Route, } from 'react-router';
import Test1 from './Test1';
import Test2 from './Test2';
import {Link} from 'react-router-dom';

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
                <Route exact={true} path={"/"} component={Test1}/>
                <Route exact={true} path={"/test2"} component={Test2}/>
                Test
                <Link to={"/test2/"}>dfsfdsf</Link>
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
