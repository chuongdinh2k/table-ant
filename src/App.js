import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Divider, Table } from 'antd';
import axios from 'axios';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const App = () => {
  const [dataTable, setdateTable] = useState([]);
  // fecth api
  const fetchDataTable = async () => {
    try {
      const res = await axios.get(`https://631afdd3dc236c0b1ee943ca.mockapi.io/tableData`);
      setdateTable(res.data);
    }
    catch (err) {
      console.log(err);
    }
  }
  React.useEffect(() => {
    // call fetch api here
    fetchDataTable();
  }, []);
  return (
    <div>

      <Divider />
      {/* fill data in table */}
      <Table
        columns={columns}
        dataSource={dataTable}
      />
    </div>
  );
};

export default App;