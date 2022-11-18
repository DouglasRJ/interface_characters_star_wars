import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import NavBar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Layout>
      <NavBar />
      <div style={{ backgroundColor: '#232425', minHeight: '100vh' }}>
        <Outlet />
      </div>
      <Footer />
    </Layout>
  );
}

export default App;
