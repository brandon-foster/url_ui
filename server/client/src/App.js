import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { HomePage } from './page/HomePage';
import { Layout } from './page/Layout';
import { HashRedirectorPage } from './page/HashRedirectorPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Layout/>}>
          <Route index exact element={<HomePage/>}></Route>
          <Route path='/l/:hashKey' exact element={<HashRedirectorPage/>}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
