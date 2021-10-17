import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Cart from './pages/Cart/Cart';

import ProductDetails from "./components/Products/ProductDetails";
import ProductListing from "./components/Products/ProductListing";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/category/:category" component={ProductListing} />
					<Route path="/category/:category/product/:productId" component={ProductDetails} />
					<Route exact path="/cart" component={Cart}></Route>
					<Route>404 Not Found!</Route>
				</Switch>
			</Router>
		</div>

	);
}

export default App;
