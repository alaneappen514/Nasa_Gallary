import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/containers/Header";
import ImageListing from "./containers/ImageListing";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ImageListing />} />
          <Route> 404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
