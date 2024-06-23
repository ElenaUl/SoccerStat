import "./header.css";

const Header = () => {
    return ( 
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <div className="logo"><strong>Soccer Stat</strong></div>
                    <ul className="nav-list">
                        <li className="nav-list__item"><a href="./index.html" className="nav-list__link nav-list__link--active">Лиги</a></li>
                        <li className="nav-list__item"><a href="./teams.html" className="nav-list__link">Команды</a></li>
                    </ul>
                </div>
            </div>
        </nav> );
}
 
export default Header;