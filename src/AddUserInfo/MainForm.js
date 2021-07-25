// import React from 'react';

const MainForm =(props)=>{
    return(
        <div>
            <label>Username</label>
            <input type="text" name="username"/>
            <label>Age (Years)</label>
            <input type="text" name="age"/>
            <button type="submit" value="Add User" onClick={()=>props.addUser(username.value,age.value)}/>
        </div>
    );
}

export default MainForm;