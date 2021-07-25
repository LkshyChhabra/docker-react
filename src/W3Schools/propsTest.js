import React,{Component} from 'react';

class CAR extends Component{
    constructor(props){
        super(props);
        // console.log(this.props.color);
        this.state={
            color:"yellow",
            name:"lullu"
        };
        // this.state={color : this.props.color}
    }

    static getDerivedStateFromProps(props,state){
        return {color:props.color};
    }
    componentDidMount() {
        setTimeout(() => {
          this.setState({name: "yellow"})
        }, 2000)
      }

    
    
    render(){
        return(
        <div>
            <h1>hi this is {this.state.color} car</h1>
            <h2>n {this.state.name} is my name</h2>
        </div>
    );
    }
}
export default CAR;