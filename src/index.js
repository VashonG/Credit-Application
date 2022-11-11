import { StrictMode } from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import App from "./App";

WebFont.load({
  google: {
    families: [
      "Poppins",
      "Work Sans:500,400,300,700,600",
      "Inter:400,500,200,100,700",
      "Montserrat:300,600,500",
      "Abel:400",
      "Karantina:300",
      "Arial:400,700",
      "IBM Plex Sans:500,600,700",
      "Poppins:300,500,600,700",
      "SF Pro:600,300",
    ],
  },
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
