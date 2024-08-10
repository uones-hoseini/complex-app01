import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Home from "./components/Home"
import HomeP from "./components/HomeP"
import Header from "./components/Header"
import About from "./components/About"
import Terms from "./components/Terms"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeP />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
