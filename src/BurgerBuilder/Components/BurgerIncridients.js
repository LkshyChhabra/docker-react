import React from 'react';
import Proptyes from 'prop-types'
import classes from './BurgerIncridients.css'

const burgerIncridients =(props)=>{
    let incridient=null;
    switch(props.type){
        case ( 'bread-bottom' ) : 
            incridient=<div className="BreadBottom"></div> 
            break;
        case ('bread-top') : incridient=<div className="BreadTop">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
        </div> 
            break;
        case ('Cheese') : incridient=<div className="Cheese"></div> 
            break;
        case ('Meat') : incridient=<div className="Meat"></div> 
            break;
        case ('Salad') : incridient=<div className="Salad"></div> 
            break;
        case ('Bacon') : incridient=<div className="Bacon"></div> 
            break;
        default : incridient=null;
    }
    return incridient;
        
    
}; 

burgerIncridients.propTyes={
    type: Proptyes.string.isRequired
};

export default burgerIncridients;