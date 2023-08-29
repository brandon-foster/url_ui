import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { HomePage } from './page/HomePage';
import { Layout } from './page/Layout';
// import { HashRedirectorPage } from './page/HashRedirectorPage';
import { MissingHashPage } from './page/MissingHashPage';

function App() {
  const [shortUrl, setShortUrl] = useState(null);
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Layout shortUrl={shortUrl}/>}>
          <Route index exact element={<HomePage shortUrl={shortUrl} setShortUrl={setShortUrl}/>}></Route>
          {/* <Route path='/l/:hashKey' exact element={<HashRedirectorPage/>}></Route> */}
          <Route path='/m/:hashKey' exact element={<MissingHashPage/>}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
