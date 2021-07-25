import React,{Component} from 'react';
import ValidationComponent from './Assignment2 lists/ValidationComponent';
import Assignment2 from './Assignment2 lists/Assignment2.css';
import CharComponent from './Assignment2 lists/CharComponent';
import charComponent from './Assignment2 lists/CharComponent';

class App extends Component{
  state={
    len:0,
    inputVal:null
    
  };

  lengthcal=(event)=>{
    this.setState({
      len:event.target.value.length,
      inputVal:event.target.value
    });
  }

  deleteChar=(index)=>{
    let inputValCop=[...this.state.inputVal.split('')];
    inputValCop.splice(index,1);
    this.setState({
      inputVal:inputValCop.join(''),
      len:this.state.len-1
    });
    
  }
  
  render(){
    let copyOfcanBDel=false;
    if(this.state.len>0)
    copyOfcanBDel=true;
    let renderCharComp=null;
    if(this.state.inputVal!==null){
      renderCharComp=(this.state.inputVal.split('').map((a,index)=>{
        return (
          <CharComponent letter={a} del={()=>this.deleteChar(index)}/>
        )
      }));
    }
    return(
      <div className="Main">
        <h1 class="heading">Character Counter</h1>
        <h2>Hi there! Type something within length 5 to 10</h2>
        <input type="text" 
        className="inp" 
        onChange={this.lengthcal} 
        value={this.state.inputVal}></input>
        <h1>{this.state.len}</h1>
        <ValidationComponent lengthoftext={this.state.len}/>
        {renderCharComp}
        {copyOfcanBDel ? <h4 className="delChar">Click on a character to delete</h4> : null}
      </div>
      
    );
  }
}

export default App;