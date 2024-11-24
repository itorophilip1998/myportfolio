import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./sass/index.scss";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <div>
      {/* Desktop View Only */}
      <div className="hidden md:block">
        <App />
      </div>
      {/* Mobile View Only */}
      <div className="flex items-center w-screen  justify-center text-white bg-black h-screen md:hidden">
        Oops, sorry this portfolio is only for desktop view.
      </div>
    </div>
  </StrictMode>
);
