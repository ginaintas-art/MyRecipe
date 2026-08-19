import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MyRecipe from "../app/page";
import "../app/globals.css";
import "../app/extra.css";
import "../app/extra2.css";
import "../app/extra3.css";
import "../app/extra4.css";
import "../app/extra5.css";
import "../app/extra6.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MyRecipe />
  </StrictMode>,
);

