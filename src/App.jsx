// IMPORTACIONES
import { BrowserRouter as Router, Route } from "react-router-dom"; // Para que sirva el link
import Navbar from "./components/navBar"; // Componente barra de navegación
import Sidebar from "./components/sideBar"; // Componente barra lateral
import "./App.scss"; // Llama a los estilos

// COMPONENTE PRINCIPAL

function App() {
  return (
    <Router>
      <Navbar />

      <div className="flex">
        <Sidebar />
      </div>

      <div className="content"></div>
    </Router>
  );
}

export default App;
