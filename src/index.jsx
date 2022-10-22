import React from "react";
import App from "src/components/App.jsx";
import store from "app/store/configureStore";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
