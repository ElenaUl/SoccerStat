import "./item.css";


import { Card } from 'antd';

const Item = ({leagueTitle, country, teamTitle, image}) => (
      <Card
        className="item"
        style={{
          width: 300,
          height: 250
        }}
      >
        <h3 className="item-title">{leagueTitle}</h3>
        <h3 className="country">{country}</h3>
        <h3 className="item-title">{teamTitle}</h3>
        {image && <img className="teamLogo"
            src={image}
        />}
      </Card>
    );

 
export default Item;