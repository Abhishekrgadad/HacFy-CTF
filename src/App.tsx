import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Registration from "./components/Registration";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/register" element={<Registration/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;