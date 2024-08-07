import ShoppingForm from './components/ShoppingForm';
import ShoppingList from './components/ShoppingList';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import {Routes,Route,Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AppState} from './types/states';
function App() {
	
	const stateSelector = (state:AppState) => {
		let error = state.shopping.error;
		if(state.login.error) {
			error = state.login.error
		}
		return {
			loading:state.login.loading,
			error:error,
			isLogged:state.login.isLogged
		}
	}
	
	const appState = useSelector(stateSelector);
	
	
	let messageArea = <h4 style={{height:50,textAlign:"center"}}></h4>
	if(appState.loading) {
		messageArea = <h4 style={{height:50,textAlign:"center"}}>Loading ...</h4>
	}
	if(appState.error) {
		messageArea = <h4 style={{height:50,textAlign:"center"}}>{appState.error}</h4>
	}
	if(appState.isLogged) {
		return (
			<>
				<Navbar />
					{messageArea}
				<Routes>
					<Route path="/" element={<ShoppingList />} />
					<Route path="/form" element={<ShoppingForm />}/>
					<Route path="*" element={<Navigate to="/"/>} />
				</Routes>
			</>
		)
	} else {
		return (
			<>
				<Navbar />
					{messageArea}
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="*" element={<Navigate to="/"/>} />
				</Routes>
			</>
		)		
	}
}

export default App
