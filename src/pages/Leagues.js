import Header from "../components/header/Header";
import LeagueItem from "../components/leagueItem/LeagueItem";
import SearchField from "../components/searchField/SearchField";

import {leagues} from "../helpers/leagueList"

const Leagues = () => {
    return (
        <>
            <Header />
            <SearchField />
            <main className="leagues">
            <div className="container">
                <ul className="leagues-list">
                    {leagues.map((leagueItem) => {
                        return <LeagueItem title={leagueItem.title} country={leagueItem.country}/>
                    })}
                </ul>
            </div>
            </main>
        </>
    );
}
 
export default Leagues;