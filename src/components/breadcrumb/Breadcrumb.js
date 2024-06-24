import { Breadcrumb } from 'antd';
import "./breadcrumb.css";

const Breadcrumbs = () => (
<div className='breadcrumbs'>
  <Breadcrumb
    items={[
      {
        title: <a href="./../../pages/Leagues.js">Лиги</a>,
      },
      {
        title: 'Название лиги',
      },
    ]}
    />
  </div>
);
export default Breadcrumbs;