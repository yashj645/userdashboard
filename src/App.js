import Home from "./routes/Home";
import Details from "./routes/Details";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NotFound from "./routes/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
