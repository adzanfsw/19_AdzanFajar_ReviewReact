import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import UserSlice from "./UserSlice";

const reducers = combineReducers({
    userdata: UserSlice
})

const persistConfig = {
    key: "root",
    storage,
};

  const persistedReducer = persistReducer(persistConfig, reducers);

  const store = configureStore({
    reducer: persistedReducer,
  });
  
  const persistor = persistStore(store);
  
  export { store, persistor };