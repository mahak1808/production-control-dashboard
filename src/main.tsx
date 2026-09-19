import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Use react-router-dom
import { TooltipProvider } from "@/components/ui/tooltip";
import { RootLayout } from "./RootLayout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/production-control-dashboard">
      {/* Global providers go outside of Routes */}
      <TooltipProvider>
        <Routes>
          {/* The Layout Route (no path needed, it wraps its children) */}
          <Route element={<RootLayout />}>
            {/* Your Subpages */}
            <Route path="/" element={<App />} />
            {/* Add more pages here later: <Route path="/about" element={<About />} /> */}
          </Route>
        </Routes>
      </TooltipProvider>
    </BrowserRouter>
  </StrictMode>,
);
