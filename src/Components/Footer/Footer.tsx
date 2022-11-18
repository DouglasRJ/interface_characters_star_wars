import './Footer.css';
import 'antd/dist/antd.css';
import { Typography, Row, Col } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

const { Text } = Typography;

const Footer = () => (
  <footer className="footer" style={{ paddingTop: '20px' }}>
    <Row gutter={[48, 0]}>
      <Col span={8} style={{ textAlign: 'center' }}>
        <Text style={{ color: 'white' }}>
          Made with <span>❤</span> by Douglas Junior
        </Text>
      </Col>
      <Col span={8} style={{ textAlign: 'center' }}>
        <a href="https://github.com/DouglasRJ" target="_blank" rel="noreferrer">
          <GithubOutlined style={{ color: 'white', fontSize: '1.5rem' }} />
        </a>
      </Col>
      <Col span={8} style={{ textAlign: 'center' }}>
        <Text style={{ fontSize: '.9rem', color: 'white' }}>Star Wars API</Text>
      </Col>
    </Row>
  </footer>
);

export default Footer;
