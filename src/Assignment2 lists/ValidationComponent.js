import React,{Component} from 'react';
const validationComponent = (props) => {
    let textlength=null;
    if(props.lengthoftext===0){
        textlength="Type something to start counting";
    }
    else if(props.lengthoftext<5){
        textlength="Text too short";
    }
    else if(props.lengthoftext>10){
        textlength="Text long enough";
    }
    
    return (
        <div>
             <h2>{textlength}</h2>
             
        </div>
       
    );
}

export default validationComponent;