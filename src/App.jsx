import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import People from "./pages/People";
import Navbar from "./components/Navbar"; // Certifique-se de que está exatamente assim

function App() {
    return (
        <Router>
            <Navbar /> {/* Adicionando a Navbar aqui */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/people" element={<People />} />
            </Routes>
        </Router>
    );
}

export default App;
