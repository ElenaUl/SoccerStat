import { Breadcrumb } from 'antd';
import "./breadcrumb.css";

const Breadcrumbs = ({link, titleRef, name}) => (
<div className='breadcrumbs'>
  <Breadcrumb
    items={[
      {
        title: <a href={link}>{titleRef}</a>,
      },
      {
        title: name,
      },
    ]}
    />
  </div>
);
export default Breadcrumbs;