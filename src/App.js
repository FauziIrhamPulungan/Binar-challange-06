import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scroll({ top: 0 });
  }, [location.pathname]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Detail/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
