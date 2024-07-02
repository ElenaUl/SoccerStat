import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import SearchField from "../components/searchField/SearchField";
import Item from "../components/item/Item";
import { Pagination } from "antd";
import { NavLink } from "react-router-dom";
import { FetchData } from "../connection"

const Leagues = () => {
    const [page, setPage] = useState(1);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(9);
    const pageSize = 9;
    const {data} = FetchData('competitions');

    const onChange = (pageNumber) => {
        setMin((pageNumber - 1) * pageSize);
        setMax(pageNumber * pageSize);
        setPage(pageNumber);
    };

    return (
        <>
            <Header />
            <SearchField />
            <main className="items">
            <div className="container">
                <ul className="items-list">
                    {data && data.competitions && 
                    data.competitions.map((competition, index) => {
                        const mmax = Math.min(max, data.count);
                        const ret = (index >= min && index < mmax)
                        ? <li key={index}>
                            <NavLink to="/leagueCalendar">
                            <Item leagueTitle={competition.name} country={competition.area.name} />
                            </NavLink>
                         </li>
                        : <></>
                        return ret;
                    })}
                </ul>
            </div>
            </main>
            <Pagination
                current={page}
                defaultPageSize={pageSize}
                total={data ? data.count : 1}
                onChange={onChange}
            />
        </>
    );
}
 
export default Leagues;