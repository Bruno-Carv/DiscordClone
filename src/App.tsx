import React, { useEffect, useState } from 'react';

import Layout from './components/Layout';
import GlobalStyle from './styles/GlobalStyles';

import chatmessage from './chat.json';
import LoadDiscrod from './components/LoadDiscord';

function App() {

  const [load, setLoad] = useState(false);

  useEffect(() => {
    if(!localStorage.getItem('message')){
      localStorage.setItem('message', JSON.stringify(chatmessage));
    }
    setTimeout(() => {
        setLoad(true);
    },10000);  
    setLoad(false);
  }, []);

  return (
    <>
      {
        load ? <Layout /> : <LoadDiscrod />
      }
      <GlobalStyle />
    </>
  );
}

export default App;
