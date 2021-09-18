import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/Store";

import Review from './page/Review';
import Home from './page/Home';
import ContactUs from './page/ContactUs';

function App() {
  return (
          <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                  <BrowserRouter>
                      <Switch>
                          <Route path="/" exact component={Home} />
                          <Route path="/contact" exact component={ContactUs} />
                          <Route path="/review" exact component={Review} />

                          {/* <Route path="*" component={} /> */}
                      </Switch>
                  </BrowserRouter>
              </PersistGate>
          </Provider>
  );
}

export default App;
