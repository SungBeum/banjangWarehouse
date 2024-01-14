import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import Complete from './Complete';
// import ErrorPage from './ErrorPage';
import Home from "./components/home/Home";
import Order from "./components/order/Order";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          {/* <Route path="/complete" element={<Complete />} /> */}
          {/* <Route path="/error" element={<ErrorPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
