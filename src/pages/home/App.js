import './App.scss';
import Layout from '../../componentes/Layout';
import HomeButtons from './HomeButtons';
import HomeLogo from './HomeLogo';

function HomePage() {
  return (
    <div className="Home">
      <Layout>
        <HomeLogo/>
        <HomeButtons/>
      </Layout>
    </div>
  );
}

export default HomePage;
