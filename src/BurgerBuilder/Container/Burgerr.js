import React,{Component} from 'react';
import Aux from '../hoc/Aux';
import Burger from '../Components/BurgerPreview';

class BurgerBuilder extends Component{
    state={
        ingredients:{
            Salad:1,
            Cheese:2,
            Bacon:2,
            Meat:4
        }
    }
    render(){
        return(
        <Aux>
            <Burger ing={this.state.ingredients}/>
            <div>burger control</div>
        </Aux>
    );
    }
}
export default BurgerBuilder;