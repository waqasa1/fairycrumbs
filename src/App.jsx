import "./App.css"
import Header from "./Components/Header"
import Home from "./Components/Home"
import AboutUs from "./Components/AboutUs"   // ✅ import AboutUs
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  )
}

export default App
