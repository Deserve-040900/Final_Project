import './App.css';

import Navbar from './Modules/Navbar/Navbar';

import TrangChu from './Pages/TrangChu';
import TrangGioiThieu from './Pages/TrangGioiThieu';
import TrangLienHe from './Pages/TrangLienHe';
import TrangBlog from './Pages/TrangBlog';
import TrangFAQ from './Pages/TrangFAQ';
import TrangThanhLy from './Pages/TrangThanhLy';
import TrangTraoDoiChoTang from './Pages/TrangTraoDoiChoTang';
import TrangSuKien from './Pages/TrangSuKien';
import TrangNDSuKien from './Pages/TrangNDSuKien';
import TrangNDSuKien1 from './Pages/TrangNDSuKien1';
import TrangNDSuKien2 from './Pages/TrangNDSuKien2';
import TrangNDSuKien3 from './Pages/TrangNDSuKien3';
import TrangDocNhieu from './Pages/TrangDocNhieu';
import TrangDocNhieu1 from './Pages/TrangDocNhieu1';
import TrangTruyen from './Pages/TrangTruyen';
import TrangSach from './Pages/TrangSach';

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
        <Route path='/nd-doc-nhieu-2.html'>
          <TrangDocNhieu1/>
        </Route>

        <Route path='/nd-doc-nhieu-1.html'>
          <TrangDocNhieu/>
        </Route>

        <Route path='/nd-su-kien-4.html'>
          <TrangNDSuKien3/>
        </Route>

        <Route path='/nd-su-kien-3.html'>
          <TrangNDSuKien2/>
        </Route>

        <Route path='/nd-su-kien-2.html'>
          <TrangNDSuKien1/>
        </Route>

        <Route path='/nd-su-kien-1.html'>
          <TrangNDSuKien/>
        </Route>

        <Route path='/form-traodoi-chotang.html'>
          <TrangTraoDoiChoTang/>
        </Route>

        <Route path='/form-thanh-ly.html'>
          <TrangThanhLy/>
        </Route>

        <Route path='/faqs.html'>
          <TrangFAQ/>
        </Route>

        <Route path='/event.html'>
          <TrangSuKien/>
        </Route>

        <Route path='/contact.html'>
          <TrangLienHe />
        </Route>

        <Route path='/blog.html'>
          <TrangBlog />
        </Route>

        <Route path='/about.html'>
          <TrangGioiThieu />
        </Route>

        <Route path='/storyhot.html'>
          <TrangTruyen />
        </Route>

        <Route path='/bookhot.html'>
          <TrangSach />
        </Route>

        <Route path='/'>
          <TrangChu />
        </Route>
      </Switch>

      <Footer />
    </Router>
    
    </>
  );
}

export default App;
