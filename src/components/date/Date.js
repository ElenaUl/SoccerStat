import "./date.css";
import { DatePicker } from 'antd';

const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

const Date = () => {
    return (
        <div className="datePicker">
            <ul className="date-row">
                <li><p>с</p></li>
                <li>
                    <DatePicker onChange={onChange} needConfirm />
                </li>
                <li><p>по</p></li>
                <li>
                    <DatePicker onChange={onChange} needConfirm />
                </li>
            </ul>
        </div>
      );
}
 
export default Date;