// IMPORTACIONES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Para que sirva el link y habilita la navegación
import Navbar from "./components/navBar"; // Componente barra de navegación para que se pueda ver
import Sidebar from "./components/sideBar"; // Componente barra lateral
import Home from "./pages/home";
import Sales from "./pages/sales";
import Clients from "./pages/clients";
import "./App.scss"; // Llama a los estilos

// COMPONENTE PRINCIPAL: Un componente es una función que devuelve HTML (JSX).

function App() {
  return (
    <Router>

      <Navbar />

      <div className="flex">

        <Sidebar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/clients" element={<Clients />} />
          </Routes>

        </div>

      </div>
      
    </Router>
  );
}

export default App;
