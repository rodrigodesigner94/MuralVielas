import Slider from '../../components/slider';
import Collections from '../../components/collections';
import Hashtags from '../../components/hashtags'
import Section from '../../components/sectionHome/index.jsx';




function Home() {
  return (
    <> 
      <Hashtags />
      <Slider/>
      <Collections /> 
      <Section />     
    </>
  );
}

export default Home;
