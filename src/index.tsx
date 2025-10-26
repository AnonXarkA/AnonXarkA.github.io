import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./tailwind.css"; // 👈 This is the correct file. My apologies.

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);