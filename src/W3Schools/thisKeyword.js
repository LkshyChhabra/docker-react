import React from 'react';
import ReactDOM from 'react-dom';

class Football extends React.Component {
  shoot  (b)  {
    alert(b.type);
    /*
    'b' represents the React event that triggered the function,
    in this case the 'click' event
    */
  }
  render() {
    return (
      <button
        onClick={this.shoot}
      >Take the shot!</button>
    );
  }
}

// ReactDOM.render(<Football />, document.getElementById('root'));
export default Football;