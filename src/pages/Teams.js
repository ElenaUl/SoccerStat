import Header from "../components/header/Header";
import SearchField from "../components/searchField/SearchField";
import Item from "../components/item/Item";
import {items} from "./../helpers/itemsList";
import { Pagination } from "antd";


const Teams = () => {
    return (
        <>
            <Header />
            <SearchField />
            <main className="items">
            <div className="container">
                <ul className="items-list">
                    {items.map((item) => {
                        return <Item teamTitle={item.teamTitle} image={item.img} />;
                    })}                    
                </ul>
            </div>
            </main>
            <Pagination />
        </>
    );
}
 
export default Teams;