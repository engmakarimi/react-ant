import React from "react";
import ReactDOM from "react-dom";
//import ReactDOM from "react-dom/client";
import App from "./App";
//import "../node_modules/antd/dist/antd.less";
//import "./theme/color.less";
//import "./theme/dark.less";
import "./theme/compact.less";

import reportWebVitals from "./reportWebVitals";
import { ConfigProvider } from "antd";
import { Theme } from "antd/lib/config-provider/context";

// const rootElement = document.getElementById("root") as HTMLElement;
// const root = ReactDOM.createRoot(rootElement);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
const mergedNextColor:Theme={
  primaryColor: '#yellow',
  infoColor:'red ',
  successColor: 'orange',
  processingColor: '#747474',
  errorColor: 'green',
  warningColor: 'blue',
};
ConfigProvider.config({
  theme: mergedNextColor,
});
ReactDOM.render(
  <ConfigProvider  direction="rtl">
    <App />
  </ConfigProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
