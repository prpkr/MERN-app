import React,{useState} from 'react';
import User from '../models/User';
import {register,login,registerFailed} from '../actions/loginActions';
import {useDispatch} from 'react-redux';
import {AnyAction} from 'redux';
import {ThunkDispatch} from 'redux-thunk';


interface State {
	username:string;
	password:string;
}

const LoginPage = () => {
	
	const [state,setState] = useState<State>({
		username:"",
		password:""
	})
	
	const dispatch:ThunkDispatch<any,any,AnyAction> = useDispatch();
	
	const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
		setState((state) => {
			return {
				...state,
				[event.target.name]:event.target.value
			}
		})
	}
	
	const onRegister = (event:React.SyntheticEvent) => {
		event.preventDefault();
		if(state.username.length <4 ||state.password.length <8) {
			dispatch(registerFailed("Username must be atleast 4 and password atleast 8 characters long"));
			return;
		}
		let user = new User(state.username,state.password);
		dispatch(register(user));
	}
	
	const onLogin = (event:React.SyntheticEvent) => {
		event.preventDefault();
		if(state.username.length <4 ||state.password.length <8) {
			dispatch(registerFailed("Username must be atleast 4 and password atleast 8 characters long"));
			return;
		}
		let user = new User(state.username,state.password);
		dispatch(login(user));
	}
	return(
		<div style={{"width":"40%","backgroundColor":"pink","textAlign":"center","margin":"auto"}}>
			<form className="m-3">
				<label className="form-label" htmlFor="username">Username</label>
				<input type="text"
						name="username"
						id="username"
						className="form-control"
						onChange={onChange}
						value={state.username}/>
				<label className="form-label" htmlFor="password">Password</label>
				<input type="password"
						name="password"
						id="password"
						className="form-control"
						onChange={onChange}
						value={state.password}/>
				<button onClick={onRegister} name="register" className="btn btn-primary">Register</button>
				<button onClick={onLogin} name="login" className="btn btn-primary">Login</button>
			</form>
		</div>
	)
}

export default LoginPage;