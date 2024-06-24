import { Table } from 'antd';


const columns = [
  {
    title: 'ДД.ММ.ГГГГ',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'ЧЧ.ММ',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'Статус',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Команда А',
    key: 'ATeam',
    dataIndex: 'ATeam',
  },
  {
    title: 'Команда Б',
    key: 'BTeam',
    dataIndex: 'BTeam',
  },
  {
    title: 'X:Y (Z:G) (N:M)',
    key: 'score',
    dataIndex: 'score',
  },
];
const data = [
  {
    key: '1',
    date: '22.05.2024',
    time: '16.30',
    status: 'Игра',
    ATeam: 'Team A',
    BTeam: 'Team B',
    score: '1:2 (1:1) (1:2)',
  },
  {
    key: '2',
    date: '22.05.2024',
    time: '16.30',
    status: 'Игра',
    ATeam: 'Team A',
    BTeam: 'Team B',
    score: '1:2 (1:1) (1:2)',
  },
  {
    key: '3',
    date: '22.05.2024',
    time: '16.30',
    status: 'Игра',
    ATeam: 'Team A',
    BTeam: 'Team B',
    score: '1:2 (1:1) (1:2)',
  },
];
const MatchTable = () => <Table columns={columns} dataSource={data} />;



export default MatchTable;