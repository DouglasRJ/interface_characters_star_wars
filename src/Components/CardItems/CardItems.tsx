import './CardItems.css';
import 'antd/dist/antd.css';

import { Button, Card, Col, Row, Skeleton } from 'antd';
import { useState } from 'react';

const colorsButtons = [
  { text: 'white', color: '#fffff' },
  { text: 'blue', color: '#0051ff' },
  { text: 'green', color: '#7dfe7f' },
  { text: 'red', color: '#ff000b' },
  { text: 'purple', color: '#7903f0' },
];

const CardItems = ({ dataSource, loading }: any) => {
  const [color, setColor] = useState('white');

  const handleChangeColor = (color: string) => {
    setColor(color);
  };

  return (
    <div>
      <div style={{ paddingBottom: '20px' }}>
        <span style={{ color: 'white', fontSize: '1rem', marginRight: '10px' }}>
          Color Shadow:
        </span>
        {colorsButtons.map(({ text }) => (
          <Button
            key={text}
            type="primary"
            style={{
              backgroundColor: '#19191a',
              border: 'none',
              textShadow: 'black 0.1em 0.1em 0.2em',
              marginRight: '10px',
            }}
            className={`hover hover-${text}`}
            onClick={() => {
              handleChangeColor(text);
            }}
          >
            {text}
          </Button>
        ))}
      </div>
      <Row
        gutter={[48, 48]}
        style={{ marginBottom: '30px', marginTop: '30px' }}
      >
        {loading && (
          <>
            {[...Array(10)].map(() => (
              <Col lg={{ span: 6 }} md={24} sm={24} xs={24}>
                <Card
                  bordered={false}
                  style={{ borderRadius: '3%' }}
                  className={`hover hover-${color}`}
                >
                  <Skeleton loading={loading} title active>
                    <p>Birth Year: birth_year</p>
                    <p>HomeWorld: homeworld</p>
                  </Skeleton>
                </Card>
              </Col>
            ))}
          </>
        )}
        {dataSource?.map(({ name, birth_year, homeworld }: any) => (
          <Col lg={{ span: 6 }} md={24} sm={24} xs={24}>
            <Card
              title={name}
              bordered={false}
              style={{ borderRadius: '3%' }}
              className={`hover hover-${color}`}
            >
              <p>Birth Year: {birth_year}</p>
              <p>HomeWorld: {homeworld}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CardItems;
