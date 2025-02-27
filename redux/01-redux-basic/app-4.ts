import { createStore, Store } from "redux";
import { contadorReducer } from "./contador/contador.reducer";
import { incrementadorAction } from "./contador/contador.actions";

const store: Store = createStore(contadorReducer);

store.dispatch(incrementadorAction);

