import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Quiz from "./Pages/Quiz";
import Solutions from "./Pages/Solutions";
import Notfound from "./Pages/Notfound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
