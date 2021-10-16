import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from "./pages/Home";
import ProductDetails from "./components/Products/ProductDetails";
import ProductListing from "./components/Products/ProductListing";

import "./App.css";
import { Cart } from './components';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/category" component={ProductListing} />
					<Route path="/product/:productId" component={ProductDetails} />
					<Route exact path="/cart" component={Cart}></Route>
					<Route>404 Not Found!</Route>
				</Switch>
			</Router>
		</div>

	);
}

export default App;
