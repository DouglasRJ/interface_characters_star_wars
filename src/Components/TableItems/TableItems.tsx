import './TableItems.css';
import 'antd/dist/antd.css';

import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

type DataType = {
  key: React.Key;
  name: string;
  birth_year: string;
  homeworld: string;
};

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Birth Year',
    dataIndex: 'birth_year',
  },
  {
    title: 'Homeworld',
    dataIndex: 'homeworld',
  },
];

const TableItems = ({ dataSource, loading }: any) => (
  <div>
    <Table
      columns={columns}
      dataSource={dataSource}
      loading={loading}
      style={{ marginTop: '10px', marginBottom: '20px' }}
    />
  </div>
);

export default TableItems;
