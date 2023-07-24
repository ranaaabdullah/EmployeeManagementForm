import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TodoForm } from "./ContextApi/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <TodoForm>
      <App />
    </TodoForm>
);
