import { createStore } from "redux";

import reducers from "./reducers/index";

const store = createStore(
    reducers, {}, // 1st argument - Reducers and 2nd is state - here an empty state
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;