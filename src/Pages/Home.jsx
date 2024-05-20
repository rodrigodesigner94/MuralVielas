import Header from '../components/header/';
import Search from '../components/search/';

import Hashtags from '../components/hashtags/';
import Slider from '../components/slider';
import Collections from '../components/collections';
import Footer from '../components/footer';
import Collections_images from '../components/collections_images';

const Home = () => {
  return (
    <>
      <Header />
      <Search />
      <Hashtags />
      <Slider />
      <Collections />
      <Collections_images />
      <Footer />
    </>
  );
};

export default Home;
