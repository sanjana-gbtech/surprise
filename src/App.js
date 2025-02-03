
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Envolope from "./pages/Envolope";
import Happy from "./pages/Happy";
import AskQuetion from "./pages/AskQuetion";

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Envolope />} />
        <Route path="/happy" element={<Happy />} />
        <Route path="/AskQuestion" element={<AskQuetion/>} />
      </Routes>
    </Router>
  );
}

export default App;
