// IMPORTACIONES
import { Link } from "react-router-dom";
import * as MdIcons from "react-icons/md";
const SideBar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/"className="text-dark">
            <MdIcons.MdHouse className="me-2"/>Inicio
          </Link>
        </li>

        <li>
          <Link to="/sales"className="text-dark">
            <MdIcons.MdBarChart className="me-2"/>Ventas
          </Link>
        </li>

        <li>
          <Link to="/clients"className="text-dark">
            <MdIcons.MdPeopleAlt className="me-2"/>Clientes
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
