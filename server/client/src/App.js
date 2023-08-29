import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { HomePage } from './page/HomePage';
import { Layout } from './page/Layout';
import { MissingHashPage } from './page/MissingHashPage';

function App() {
  const PUBLIC_URL = process.env.PUBLIC_URL || '/';
  const [shortUrl, setShortUrl] = useState(null);
  return (
    <Router>
      <Routes>
        <Route path={PUBLIC_URL} exact element={<Layout shortUrl={shortUrl}/>}>
          <Route index exact element={<HomePage shortUrl={shortUrl} setShortUrl={setShortUrl}/>}></Route>
          <Route path={`${PUBLIC_URL}m/:hashKey`} exact element={<MissingHashPage/>}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
