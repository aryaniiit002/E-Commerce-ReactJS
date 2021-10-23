import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home, Cart } from './pages'
import ProductDetails from "./components/Products/ProductDetails";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/category/:category/product/:productId"
						component={ProductDetails} />
					<Route exact path="/cart" component={Cart}></Route>
					<Route>404 Not Found!</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
