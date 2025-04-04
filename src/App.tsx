
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Analytics from "./pages/Analytics";
import NotFound from "./pages/NotFound";
import Developers from "./pages/Developers";
import Roadmaps from "./pages/Roadmaps";
import ProgrammingLanguages from "./pages/ProgrammingLanguages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/roadmaps" element={<Roadmaps />} />
        <Route path="/programming-languages" element={<ProgrammingLanguages />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
