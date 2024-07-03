import { useState } from "react";
import Header from "../components/header/Header";
import Breadcrumbs  from "../components/breadcrumb/Breadcrumb";
import { Table, Tag } from 'antd';
import { useParams } from 'react-router-dom';
import { FetchData } from "../connection";
import DatePicker from "../components/date/Date";

const columns = [
    {
      title: 'ДД.ММ.ГГГГ',
      dataIndex: 'utcDate',
      key: 'utcDateDate',
      render: (date) => {
        const dateTime = new Date(Date.parse(date));
         return (
            <>
            {dateTime.toLocaleDateString('ru-RU', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            })}
          </>
        );
      }
    },
    {
      title: 'ЧЧ.ММ',
      dataIndex: 'utcDate',
      key: 'utcDateTime',
      render: (date) => {
        const dateTime = new Date(Date.parse(date));
        return (
            <>
            {dateTime.toLocaleTimeString('ru-RU', {
                hour: '2-digit',
                minute: '2-digit',
            })}
          </>
        );
      }
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      key: 'status',
      render: (_, { status }) => {
            let color = 'green';
            if (status === 'FINISHED') {
              color = 'volcano';
              status = 'Завершен'
            } else if (status === 'CANCELED') {
              color = 'DodgerBlue';
              status = 'Отменен'
            } else if (status === 'SCHEDULED') {
                color = 'DarkSlateGray';
                status = 'Запланирован'
            } else if (status === 'LIVE') {
                color = 'DeepSkyBlue';
                status = 'В прямом эфире'
            } else if (status === 'IN_PLAY') {
                color = 'LightGreen';
                status = 'В игре'
            } else if (status === 'PAUSED') {
                color = 'FireBrick';
                status = 'Пауза'
            } else if (status === 'POSTPONED') {
                color = 'DarkViolet';
                status = 'Отложен'
            } else if (status === 'SUSPENDED') {
                color = 'GoldenRod';
                status = 'Приостановлен'
            } else if (status === 'TIMED') {
              color = 'GoldenRod';
              status = 'Назначение времени'
            }
            return (
              <Tag color={color} key={status}>
                {status}
              </Tag>
            );
      },
    },
    {
      title: 'Команда А',
      dataIndex: 'homeTeam',
      key: 'homeTeam',
      render: (team) => `${team.name != null ? team.name : ''}`,
    },
    {
      title: 'Команда Б',
      dataIndex: 'awayTeam',
      key: 'awayTeam',
      render: (team) => `${team.name != null ? team.name : ''}`,
    },
    {
      title: 'X:Y (Z:G)',
      dataIndex: 'score',
      key: 'score',
      render: (score) => {
            const ret = score.fullTime.home != null
            ? `${score.fullTime.home} : ${score.fullTime.away} (${score.halfTime.home} : ${score.halfTime.away})`
            : ``;
            return ret;
        },
    },
  ];

const LeagueCalendar = () => {
  const params = useParams();
  const id = params.id;
  const name = params.name;

  const [date, setDate] = useState([]);

  const onChange = (_, dateString) => {
    setDate(dateString);
  };

  const {data} = date.length > 1 && date[0] !== "" && date[1] !== ""
    ? FetchData(`competitions/${id}/matches?dateFrom=${date[0]}&dateTo=${date[1]}`)
    : FetchData(`competitions/${id}/matches`);

  return (
      <>
      <Header/>
      <Breadcrumbs link={"/"} titleRef={'Лиги'} name={name}/>
      <strong className="matches">Матчи</strong>
      <DatePicker dateChangeHandler={onChange} />
      {data && data.matches && <Table columns={columns} dataSource={data.matches}/>}
      </>
  );
}
 
export default LeagueCalendar;