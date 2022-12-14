// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// eslint-disable react/prop-types
/* eslint-disable */

import React, { useLayoutEffect, useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import { Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './segments/Footer';
import Header from './segments/Header';
import Home from './pages/Home';
// import AboutUs from './pages/AboutUs';
import FAQ from 'pages/FAQ';
import PrivacyMobile from 'pages/PrivacyMobile';
import Privacy from './pages/Privacy';
import TermsOfService from './pages/TermsOfService';
import RedirectToPlatform from './components/RedirectToDiffUrl';


ReactGA.initialize('UA-165415629-2');

function App() {
  useEffect(() => {
    ReactGA.pageview('/entry');
  }, []);

  const [isAlertVisible, setIsAlertVisible] = useState(true);

  const hideAlertHandler = ()=>{
    setIsAlertVisible(false);
  };

  const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  
  return (
      <Wrapper>
      <AppWrapper>
      <Header isAlertVisible={isAlertVisible} setIsAlertVisible={setIsAlertVisible} hideAlertHandler={hideAlertHandler} />
      <Routes>
        {/* add all the route paths here */}
        <Route path="/" element={<Home isAlertVisible={isAlertVisible} />} />
        {/* <Route path="/about" element={<AboutUs />} /> */}
        <Route path="/faq" element={<FAQ />} />
        <Route path="/tos" element={<TermsOfService />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/privacymobile" element={<PrivacyMobile />} />
        <Route path="/notify" element={<RedirectToPlatform />} />
      </Routes>
      <Footer />
    </AppWrapper>  
    </Wrapper>

  );
}

const AppWrapper = styled.div`
	flex-wrap: wrap;
	display: flex;
	flex-direction: column;
	flex: 1;
`;

export default App;
