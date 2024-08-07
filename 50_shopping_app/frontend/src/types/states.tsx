import ShoppingItem from '../models/ShoppingItem';
import {AnyAction,Reducer} from 'redux';

export interface LoginState {
	isLogged:boolean;
	token:string;
	loading:boolean;
	error:string;
	user:string;
}

export interface ShoppingState {
	list:ShoppingItem[];
	error:string;
}

export interface AppState {
	login:LoginState;
	shopping:ShoppingState;
}

export interface RootReducer {
	login:Reducer<LoginState,AnyAction>;
	shopping:Reducer<ShoppingState,AnyAction>;
}