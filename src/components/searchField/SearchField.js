import { Input, Space } from 'antd';
import "./searchField.css";

const { Search } = Input;

const SearchField = ({dateChangeHandler}) => {
    return ( 
        <div className="search-field">
                <Space className="search" direction="vertical">
                <Search
                    placeholder="Поиск"
                    onSearch={dateChangeHandler}
                    style={{
                    width: 200,
                    }}
                />
                </Space>
        </div>
        );
}
 
export default SearchField;