import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import SearchField from "../components/searchField/SearchField";
import Item from "../components/item/Item";
import { Pagination } from "antd";
import { NavLink } from "react-router-dom";
import { FetchData } from "../connection";

const Leagues = () => {
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(9);
    const pageSize = 9;
    const {data} = FetchData('competitions');
    let competitions = data.competitions;
    let count = 0;
    if (search) {
        competitions = competitions.filter(competition => {
            const res = competition.name.toLowerCase().includes(search.toLowerCase());
            if (res) count += 1;
            return res;
        }
        );
    } else {
        count = data.count;
    }

    const onChange = (pageNumber) => {
        setMin((pageNumber - 1) * pageSize);
        setMax(pageNumber * pageSize);
        setPage(pageNumber);
    };

    const onSearch = (value, _e, info) => {
        setSearch(value);
        setPage(1);
    }

    return (
        <>
            <Header />
            <SearchField dateChangeHandler={onSearch} />
            <main className="items">
            <div className="container">
                <ul className="items-list">
                    {competitions && competitions && 
                    competitions.map((competition, index) => {
                        const mmax = Math.min(max, data.count);
                        const ret = (index >= min && index < mmax)
                        ? <li key={index}>
                            <NavLink to={`/leagueCalendar/${competition.id}/${competition.name}`}>
                            <Item leagueTitle={competition.name} country={competition.area.name} />
                            </NavLink>
                         </li>
                        : ''
                        return ret;
                    })}
                </ul>
            </div>
            </main>
            <Pagination
                current={page}
                defaultPageSize={pageSize}
                total={count}
                onChange={onChange}
            />
        </>
    );
}
 
export default Leagues;