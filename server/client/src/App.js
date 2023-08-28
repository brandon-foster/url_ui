import { EnterLongUrl } from './comp/EnterLongUrl';
import { UrlList } from './comp/UrlList';

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <h1>Url Service</h1>
      </div>
      <div className='row'>
        <EnterLongUrl></EnterLongUrl>
        <UrlList></UrlList>
      </div>
    </div>
  );
}

export default App;
