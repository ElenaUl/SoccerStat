import "./header.css";

import { NavLink } from "react-router-dom";

const Header = () => {

    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';

    return ( 
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <div className="logo"><strong>Soccer Stat</strong></div>
                    <ul className="nav-list">

                        <li className="nav-list__item">
                            <NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink}>
                                Лиги
                            </NavLink>
                        </li>

                        <li className="nav-list__item">
                            <NavLink to="/teams" className={({isActive}) => isActive ? activeLink : normalLink}>
                                Команды
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav> );
}
 
export default Header;