import React,{Component} from 'react';
import MainForm from './MainForm';

class Homepage extends Component{
    
    state={
        user= {
           name: 'lkshy',
           age=82
       },
        userlist={}
    }

adduser=()=>{
    this.setState(this.state.userlist.add(user))
}
    render(){
        return(
        <div>
            <MainForm addUser={this.addUsertoList}/>
            mainFOrm
            ValidationComponent
            users List
        </div>
    );
    }
}
export default Homepage;