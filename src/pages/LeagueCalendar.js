import Header from "../components/header/Header";
import Breadcrumbs  from "../components/breadcrumb/Breadcrumb";
import Date from "../components/date/Date";
import MatchTable from "../components/MatchTable/MatchTable";

const LeagueCalendar = () => {
    return (
        <>
        <Header/>
        <Breadcrumbs link={"./"} titleRef={'Лиги'} name={'Название лиги'}/>
        <strong className="matches">Матчи</strong>
        <Date/>
        <MatchTable/>
        </>
    );
}
 
export default LeagueCalendar;