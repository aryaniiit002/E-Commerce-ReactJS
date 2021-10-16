import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux"; // Provide the redux store

ReactDOM.render(
	<React.StrictMode>
		{/* To link our react application with the redux store  */}
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);