import React,{Component} from 'react';

class TranslatorLayout extends Component{
    state={txt:""};

     clickhandler=(a)=>{
        this.setState({txt:a.target.value});
    }

    

    render(){
       var arr=["English","Spanish"];
        return(
        <div>
            <h1>Translator</h1>
            Enter the text
            <input type="text" onChange={(a)=>{this.clickhandler(a)}}/>
            <br></br>
            Select language
            <br></br>
            <select>
           
                {
                 
                   arr.map((x)=>{ 
                   return <option value={x}>{x}</option>
                })
                      
                } 
                
                
            </select>
            <br></br>
            Output
           
            <h1>{this.state.txt}</h1>
        </div>
    );
    }
}
export default TranslatorLayout;