import { Input, Space } from 'antd';
import "./searchField.css";


const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);

const SearchField = () => {
    return ( 
        <div className="search-field">
                <Space className="search" direction="vertical">
                <Search
                    placeholder="Поиск"
                    onSearch={onSearch}
                    style={{
                    width: 200,
                    }}
                />
                </Space>
        </div>
        );
}
 
export default SearchField;