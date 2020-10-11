import React, { Component } from 'react';
import Menu from '../menu/MenuComponent';
import DishDetail from '../dish/DishdetailComponent';
import Header from '../header/header.component'
import Footer from '../footer/footer.component'
import PAGES from '../../shared/constants/pages.js';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: PAGES,
        selectedDish: null
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish});
  }

  render() {
    return (
      <div>
        <Header/>
        <Menu dishes={this.state.dishes} onClick={(dish) => this.onDishSelect(dish)} />
        <DishDetail dish={this.state.selectedDish} />
        <Footer/>
      </div>
    );
  }
}

export default Main;