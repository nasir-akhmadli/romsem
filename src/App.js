
import './App.css';

import Aos from 'aos';
import "aos/dist/aos.css"
 import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './views/Home';
import Pizza from './views/Pizza'
import Set from './views/Set';
import Reviews from './views/Reviews';
import Checkout from './views/Checkout';
import Error from './views/Error';
import { useEffect } from 'react';
import CookieConsent from 'react-cookie-consent';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  useEffect(() => {
    Aos.init({ duration: 1500});
  }, []);
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/Pizza' exact element={<Pizza/>}/>
      <Route path='/Set' exact element={<Set/>}/>
      <Route path='/Reviews' exact element={<Reviews/>}/>
      <Route path='*' exact element={<Error/>}/>
      <Route path='/Checkout' exact element={<Checkout/>}/>
    </Routes>
    </BrowserRouter>
    <CookieConsent
  location="bottom"
  buttonText="Accept all"
  cookieName="myAwesomeCookieName2"
  style={{ background: "#2B373B" }}
  buttonStyle={{ color: "#4e503b", fontSize: "13px", background: "#FF6B43" }}
>
  This website uses cookies to enhance the user experience.{" "}
</CookieConsent>
<ToastContainer />
    </>
  );
}

export default App;
