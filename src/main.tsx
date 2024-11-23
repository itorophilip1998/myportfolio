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
      {/* Mobile View */}
      <div className="block sm:hidden">
        <App />
      </div>
      {/* Desktop View */}
      <div className="block md:hidden items-center justify-center text-white bg-black h-screen">
        Oops, sorry this portfolio is only for mobile view.
      </div>
    </div>
  </StrictMode>
);
