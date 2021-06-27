import Styles from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
const MainNavigation = () => {
  return (
    <header className={Styles.header}>
      <div className={Styles.logo}>Daily Quotations</div>
      <nav className={Styles.nav}>
        <ul>
          <li>
            <NavLink activeClassName={Styles.active} to="/quotes">
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={Styles.active} to="/new-quote">
              New Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
