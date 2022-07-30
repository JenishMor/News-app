import './App.css';
import Navbar from './Component/Navbar';
import News from './Component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  let apiKey = process.env.REACT_APP_NEWS_API
  let pageSize = 6;
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<News key="home" apiKey={apiKey} country="in" pageSize={pageSize} category='general' />} />
          <Route exact path='/business' element={<News key="business" apiKey={apiKey} country="in" pageSize={pageSize} category='business' />} />
          <Route exact path='/entertainment' element={<News key="entertainment" apiKey={apiKey} country="in" pageSize={pageSize} category='entertainment' />} />
          <Route exact path='/health' element={<News key="health" apiKey={apiKey} country="in" pageSize={pageSize} category='health' />} />
          <Route exact path='/science' element={<News key="science" apiKey={apiKey} country="in" pageSize={pageSize} category='science' />} />
          <Route exact path='/sports' element={<News key="sports" apiKey={apiKey} country="in" pageSize={pageSize} category='sports' />} />
          <Route exact path='/technology' element={<News key="technology" apiKey={apiKey} country="in" pageSize={pageSize} category='technology' />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// We can also use top-loading-bar and infinite-scroll in this app
// npm install top-loading-bar | for reference search react top-loading-bar