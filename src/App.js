import LeftSlide from './pages/components/leftMenu';
import {useRoutes} from 'react-router-dom'
import routeConfig from './pages/router/config'
import http from './utils/http'
import {useEffect} from 'react'
import {sessionStorage} from './utils/storage'
import './App.css';
const  App = ()=> {
  const element = useRoutes(routeConfig)
  useEffect(()=>{
    // http({
    //   url:'https://www.fastmock.site/mock/371fe1b7b0502b958e6aaeda49462a6e/mock/api/user',
    //   method:'post',
    //   data:{
    //     phone:'1213131',
    //     passWord:'1234567890'
    //   }
    // }).then((res)=>{
    //   console.log(res,'res')
    // })
  },[])
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
