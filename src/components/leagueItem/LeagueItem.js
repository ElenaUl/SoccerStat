import "./leagueItem.css";

const LeagueItem = ({title, country}) => {
    return (
    <li className="leagues-list-item">
        <a href="./league-calendar.html">
        <h3 className="league-title">{title}</h3>
        <h3 className="country">{country}</h3>
        </a>
    </li>);
}
 
export default LeagueItem;