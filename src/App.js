import Navbar from "./Navbar";
import About from "./pages/About";
import Events from "./pages/Events";
import "./style.css"
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <main>
            <Navbar />
            <Routes>
                <Route path="/events" element={<Events />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </main>
    )
}

export default App;
