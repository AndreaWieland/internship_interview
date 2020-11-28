import React, { Component } from 'react';
import Input from './Input';
import List from './List';
import Dish from './Dish'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      showDishes: false,
      dishes: [
        new Dish('Baklava'),
        new Dish('Aloo Tikki Chaat'),
        new Dish('Fufu')
      ]
    }
    this.addDish = this.addDish.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  handleKeyPress(event){
    let inp = document.getElementById('entry_field');
    if (event.keyCode === 13 && inp.value !== '' && document.activeElement === inp){
      this.addDish();
    }
  }

  toggleDisplay(){
    this.setState({
      showDishes: !this.state.showDishes,
      dishes: this.state.dishes
    });
  }

  addDish(){
    let yums = [...this.state.dishes];
    yums.push(new Dish(document.getElementById('entry_field').value));
    this.setState({
      showDishes: this.state.showDishes,
      dishes: yums
    });
    document.getElementById('entry_field').value = '';
  }


  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyPress);
  }

  render() {
    return (
      <div className="App">
        <Input 
          click={this.addDish}/>
        <List 
          show={this.state.showDishes}
          dishes={this.state.dishes}
          toggle={this.toggleDisplay}
        />
      </div>
    );
  }
}

export default App;
