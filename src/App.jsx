import './App.css';
import Header from './components/header';
import Search from './components/search';

import Footer from './components/footer';

import { Outlet } from 'react-router-dom';



function App() {
  return (
    <>
      <Header />
      <Search />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
