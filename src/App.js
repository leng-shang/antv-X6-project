import './App.css';
import LeftSlide from './pages/components/leftMenu';
import {useRoutes} from 'react-router-dom'
import routeConfig from './pages/router/config'
function App() {
  const element = useRoutes(routeConfig)
  return (
    <div className="app">
      <div className='left'>
        <LeftSlide/>
      </div>
      <div className='con-box'>
          {element}
      </div>
    </div>
  );
}

export default App;
