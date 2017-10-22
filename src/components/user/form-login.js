import React from 'react';
import PropTypes from 'prop-types';
import Input from '../common/Input';

const UserLoginForm = ({user, onSave, onChange, errors}) => {

		return (
			<form>
				<h3>Login Form</h3>
				<Input
					name="username"
                    label='username'
					value={user.username}
					onChange={onChange}
					error={errors.username} />

				<Input
					name="password"
                    label='password'
					value={user.password}
					onChange={onChange}
					error={errors.password} />

				<input type="submit" value="Save" className="btn btn-default" onClick={onSave} />
			</form>
		);
};

UserLoginForm.propTypes = {
    user:	PropTypes.object.isRequired,
    onSave:	PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object
};

export default UserLoginForm;
