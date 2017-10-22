import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import FormLogin from './form-login';

import { loginUser } from '../../store/actions/users';

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.changeURL = this.changeURL.bind(this);
        this.loginUser = this.loginUser.bind(this);
        this.setUserState = this.setUserState.bind(this);

        this.state = {
            user : {
                username : '',
                password : ''
            }
        }
    }

    setUserState (event) {
		const field = event.target.name;
		const value = event.target.value;
		this.state.user[field] = value;
		return this.setState({user: this.state.user});
	}

    changeURL () {
        this.props.loginUser();
    }

    loginUser (event) {
        event.preventDefault();
        console.log('loged in');
        console.log(this.state.user);
    }

    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <FormLogin
                    user = {this.state.user}
                    onSave = {this.loginUser}
                    onChange = {this.setUserState}
                    errors = {{}}
                />

                <Link to="/dashboard" activeStyle={{color: 'red'}}>DashBoard</Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        events: state.events
    }
};

const mapDispatchToProps =  {
    loginUser: loginUser,
};

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);
