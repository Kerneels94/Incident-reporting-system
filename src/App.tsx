/**
 * Imports
 */
import "../dist/output.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { Incidents } from "./pages/Incidents";
import { Ob } from "./pages/Ob";
import { Forgot } from "./pages/Forgot";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/incidents" element={<Incidents />} />
        <Route path="/ob" element={<Ob />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
    </>
  );
}

export default App;
