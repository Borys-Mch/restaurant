import { useState } from "react";
import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Dish from "../pages/Dish";
import Home from "../pages/Home";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/menu" element={<DishesList />} />
          <Route path="/menu/:slug" element={<Dish />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
