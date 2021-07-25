import React from 'react';
const charComponent=(props)=>{
    return(
        <div className="char" onClick={props.del}>
            <p>{props.letter}</p>
        </div>
    );
}

export default charComponent;