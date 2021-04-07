import './App.css';

import TopBanner from './Modules/TopBanner/TopBanner';
import IntroIndex from './Modules/IntroIndex/IntroIndex';
// import Wrap from './Modules/Wrap/Wrap';
import Slider from './Modules/Slider/Slider';
import Truyenslide from './Modules/Truyenslide/Truyenslide';
import ListIndex from './Modules/ListIndex/ListIndex';
import Footer from './Modules/Footer/Footer';

function App() {
  return (
    <>

    <TopBanner title_page={"B." + "Store" + Math.round(Math.random() * 100)} />

    <Slider />

    {/* <Wrap /> */}

    <IntroIndex />

    <ListIndex />

    <Truyenslide />

    <Footer />
    
    </>
  );
}

export default App;
