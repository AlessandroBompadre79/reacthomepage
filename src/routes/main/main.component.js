import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from '../../components/menu/menu.component';
import Header from '../../components/header/header.component'
import Footer from '../../components/footer/footer.component'
import Home from '../../components/home/home.component';
import Contact from '../../components/contact/contact.component';
import DishDetail from '../../components/dish/dishdetail.component';
import About from '../../components/about/about.component';
import PAGES from '../../shared/constants/pages.js';
import { COMMENTS } from '../../shared/constants/comments';
import { PROMOTIONS } from '../../shared/constants/promotions';
import { LEADERS } from '../../shared/constants/leaders';
import './main.scss';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: PAGES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS,
        selectedDish: null
    };
  }

  render() {
    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };

    const HomePage = () => {
        return(
            <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
            promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
            leader={this.state.leaders.filter((leader) => leader.featured)[0]}/>
        );
    }

    return (
      <React.Fragment>
        <Header/>
        <Switch>
            <Route path='/home' component={HomePage} />
            <Route path='/aboutus' component={() => <About leaders={this.state.leaders} />} />
            <Route exact path='/contactus' component={Contact} />
            <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
            <Route path='/menu/:dishId' component={DishWithId} />
            <Redirect to="/home" />
        </Switch>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default Main;