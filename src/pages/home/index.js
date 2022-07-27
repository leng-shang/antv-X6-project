import React from "react";
import history from '../../utils/history'

class Home extends React.Component{
    
    goLogin = ()=>{
        history.push('login')
    }
    render(){
        return <div onClick={this.goLogin}>
                Home
        </div>
    }
}

export default Home