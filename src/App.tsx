import { BrowserRouter as Router } from "react-router-dom";
// --- CORRECTED IMPORT PATH ---
import { ScrollLayout } from "./components/ScrollLayout.tsx";

export const App = () => {
  return (
    <Router>
      <ScrollLayout />
    </Router>
  );
};