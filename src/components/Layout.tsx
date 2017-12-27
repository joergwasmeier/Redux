import * as React from 'react';
import {connect} from 'react-redux';
import {Route } from 'react-router';
import Test1 from './Test1';
import Test2 from './Test2';
import {Link} from 'react-router-dom';
import {getUsers, setName} from '../actions/userActions';
import {Store} from '../store';

interface ILayoutStateToProps{
    userName:string;
    location:Location
}

interface ILayoutDispatchToProps{
    onGetUserName:any;
    onSetUserName:any;
}

interface ILayoutProps extends ILayoutStateToProps, ILayoutDispatchToProps{
    label:string;
}

class Layout extends React.PureComponent<ILayoutProps>{
    componentDidMount(){
        this.props.onGetUserName();
    };

    changeName = (e) =>{
        this.props.onSetUserName(e.target.value);
    };

    render() {
        console.log("Layout rerender");
        return (
            <div>
                {this.props.label}
                <br/>
                <Route exact={false} path={"/"} render={()=><Test1/>} />
                <Route exact={true} path={"/test2"} render={()=><Test2/>} />
                <br/>
                <Link to={"/"}>Test1</Link><br/>
                <Link to={"/test2/"}>Test2</Link><br/>
                <br/>
                <input onChange={this.changeName} placeholder="Change Name" />
                Username: {this.props.userName}
            </div>
        );
    }
}

const mapStateToProps = (state : Store):ILayoutStateToProps => ({
    userName:state.user.name,
    location: state.router.location
});

const mapDispatchToProps = (dispatch):ILayoutDispatchToProps => ({
    onGetUserName: () => {dispatch(getUsers())},
    onSetUserName: (value) => {dispatch(setName(value))}
});

export default connect<ILayoutStateToProps, ILayoutDispatchToProps, { label: string }>(mapStateToProps, mapDispatchToProps)(Layout);