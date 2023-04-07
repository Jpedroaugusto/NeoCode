import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./shared/pages/Home";
import { Blog } from "./shared/pages/Blog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
