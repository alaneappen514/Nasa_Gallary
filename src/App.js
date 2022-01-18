import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "../src/containers/Header"
import ImageListing from './containers/ImageListing';
import ImageDetails from './containers/ImageDetails';
function App() {
  return (
    <div >
      <Router>     
        <Header /> 
          <Routes>
            <Route path='/' exact compnent={ImageListing} />
            <Route path='/image/:imageid' exact compnent={ImageDetails} />
            <Route> 404 Not Found!</Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
