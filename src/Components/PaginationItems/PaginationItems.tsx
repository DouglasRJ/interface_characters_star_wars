import { Button, Typography } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

const { Text } = Typography;

const PaginationItems = ({
  page,
  loadingPagination,
  handlePreviousPage,
  handleNextPage,
}: any) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row-reverse',
      alignItems: 'center',
      gap: '20px',
    }}
  >
    <Button
      loading={loadingPagination}
      onClick={() => handleNextPage()}
      style={{
        backgroundColor: '#19191a',
        color: 'white',
        borderColor: '#4d4f55',
      }}
    >
      Next Page
      <RightOutlined />
    </Button>
    <div className="page_indicator">
      <Text style={{ color: 'white' }}>Page {page}</Text>
    </div>
    {page > 1 && (
      <Button
        loading={loadingPagination}
        onClick={() => handlePreviousPage()}
        style={{
          backgroundColor: '#19191a',
          color: 'white',
          borderColor: '#4d4f55',
        }}
      >
        <LeftOutlined />
        Previous Page
      </Button>
    )}
  </div>
);

export default PaginationItems;
