// IMPORTACIONES
import { NavLink } from "react-router-dom";
import * as MdIcons from "react-icons/md";
const SideBar = () => {
  return (
    <div className="sidebar bg-light">
      <ul>
        <li>
          <NavLink to="/" className="text-dark rounded py-2 w-100 d-block px-3" activeClassName="active">
            <MdIcons.MdHouse className="me-2"/>Inicio
          </NavLink>
        </li>

        <li>
          <NavLink to="/sales" className="text-dark rounded py-2 w-100 d-block px-3" activeClassName="active">
            <MdIcons.MdBarChart className="me-2"/>Ventas
          </NavLink>
        </li>

        <li>
          <NavLink to="/clients" className="text-dark rounded py-2 w-100 d-block px-3" activeClassName="active">
            <MdIcons.MdPeopleAlt className="me-2"/>Clientes
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
