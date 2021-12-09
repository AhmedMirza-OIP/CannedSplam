import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../src/Styles/Header.css";
import "../src/Styles/Footer.css";
import "../src/Styles/Style.css";
// import '../../cannedsplam/src/App.css'
import "../src/App.css";
// import HomePage from "./Pages/HomePage";
import SearchPage from "./Pages/SearchPage";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router,Routes, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    // <HomePage />
    // <SearchPage />
    <Router>
      <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/search' element={<SearchPage/>} />
        {/* <Route path="/search">
          <SearchPage />
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
