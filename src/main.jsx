import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "font-awesome/css/font-awesome.css";
import App from "./App.jsx";
import NewsApp from "./components/news/NewsApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <NewsApp />
  </StrictMode>
);
