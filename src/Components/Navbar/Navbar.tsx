import './Navbar.css';
import 'antd/dist/antd.css';
import { Layout, Typography } from 'antd';

const { Header } = Layout;
const { Title } = Typography;

const NavBar = () => (
  <Header
    style={{
      backgroundColor: '#0c0c0c',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}
  >
    <div style={{ display: 'flex', gap: '10px' }}>
      <Title level={2} style={{ color: '#f0f0f0', paddingTop: 10 }}>
        Smart Nx
      </Title>
      <img
        src="death-star.svg"
        alt="death-star"
        style={{ color: 'white', width: '2.5rem' }}
      />
    </div>
  </Header>
);

export default NavBar;
