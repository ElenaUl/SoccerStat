import "./item.css";
import { Card } from 'antd';


/* const Item = () => {
    return (
    <li className="item">
        <h3 className="league-title"></h3>
        <h3 className="country"></h3>
        <img
            src={image}
            alt="Team logo"
            className="team-logo"
        />
        <h3 className="team-title"></h3>
    </li>);
} */

const Item = ({leagueTitle, country, teamTitle, image}) => (
      <Card
        className="item"
        style={{
          width: 300,
        }}
      >
        <h3 className="item-title">{leagueTitle}</h3>
        <h3 className="country">{country}</h3>
        <h3 className="item-title">{teamTitle}</h3>
        <img
            src={image}
        />
      </Card>
    );

 
export default Item;