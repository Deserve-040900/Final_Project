import './App.css';

import Navbar from './Modules/Navbar/Navbar';

import Trang_chu from './Pages/Trang_chu';

import Footer from './Modules/Footer/Footer';
import { useState } from 'react';
import {Link,  Route,  BrowserRouter as Router,  Switch} from 'react-router-dom';

function App() {
  const[load_navbar, SetLoadTopBanner] = useState(true);

  const handleUnMountTopBanner = () => {
    SetLoadTopBanner(false);
  }

  return (
    <>
    <Router>
      {
        (load_navbar)?
        <Navbar title_page={"๖ۣۜ𝓑" + ".𝓢𝓽𝓸𝓻𝓮"} delete_me={handleUnMountTopBanner} />
        : null
      }

      <Switch>
        <Route path='/'>
          <Trang_chu />
        </Route>
      </Switch>

      <Footer />
    </Router>
    
    </>
  );
}

export default App;
