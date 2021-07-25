import React from 'react';
import classis from './BurgerPreview.css';
import Incridients from '../Components/BurgerIncridients';

const burgerpreview =(props)=>{
    const transformIng=Object.keys(props.ing).map(igkey=>{
        return [...Array(props.ing[igkey])].map((_,i)=>{
            return <Incridients type={igkey} key={igkey+i}/>
        });
    });
    return(
        <div className="Burgersss">
            <Incridients type="bread-top"/>
            {transformIng}
            <Incridients type="bread-bottom"/>
            
        </div>
    );
}

export default burgerpreview;