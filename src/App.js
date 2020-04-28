import React from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import { Provider } from "react-redux";
import store from "./Reducers/index";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
