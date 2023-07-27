import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./componets/Dashboard";
import Layout from "./componets/shared/layout";
import Products from "./componets/Products";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
