import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Order from "./components/order/Order";
import Complete from "./components/complete/Complete";
import OrderError from "./components/error/OrderError";
import NotFound from "./components/error/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/complete" element={<Complete />} />
          <Route path="/error" element={<OrderError />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
