import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Search from './components/search';
import ResultColection from './components/resultColection';
import Hashtags from './components/hashtags';
//import Slider from './components/slider';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Header />
      <Search />
      <Hashtags />
      {/* <Slider /> */}
      <ResultColection />
      <Footer />
    </>
  );
}

export default App;
