import React, { useEffect } from 'react';

import Layout from './components/Layout';
import GlobalStyle from './styles/GlobalStyles';

import chatmessage from './chat.json';

function App() {

  useEffect(() => {
    localStorage.setItem('message', JSON.stringify(chatmessage));
  }, []);

  return (
    <>
      <Layout />

      <GlobalStyle />
    </>
  );
}

export default App;
