import React from "react";
import ReactDOM from "react-dom/client";
import ConfigProvider from "antd/es/config-provider";
import theme from "antd/es/theme";
import App from "./App.jsx";
import "./styles.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { BrowserRouter } from "react-router-dom";
import setupInterceptor from "./utils/interceptor.js";

setupInterceptor();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: "#8b7bff",
          colorBgBase: "#111116",
          colorText: "#f4f2fa",
          colorTextSecondary: "#92909f",
          borderRadius: 12,
          fontFamily: "'DM Sans', sans-serif",
        },
      }}
    >
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ConfigProvider>
  </React.StrictMode>,
);
