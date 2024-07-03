import "./date.css";
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

const Date = ({dateChangeHandler}) => {
    return (
        <div className="datePicker">
            <RangePicker onChange={dateChangeHandler} format={'YYYY-MM-DD'} />
        </div>
      );
}
 
export default Date;