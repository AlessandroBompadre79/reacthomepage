import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Menu from '../../components/menu/menu.component';
import Header from '../../components/header/header.component'
import Footer from '../../components/footer/footer.component'
import Home from '../../components/home/home.component';
import Contact from '../../components/contact/contact.component';
import DishDetail from '../../components/dish/dishdetail.component';
import About from '../../components/about/about.component';
import { connect } from 'react-redux';

import './main.scss';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
};
class Main extends Component {

  render() {
    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };

    const HomePage = () => {
        return(
            <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
            promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
            leader={this.props.leaders.filter((leader) => leader.featured)[0]}/>
        );
    }

    return (
      <React.Fragment>
        <Header/>
        <Switch>
            <Route path='/home' component={HomePage} />
            <Route path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
            <Route exact path='/contactus' component={Contact} />
            <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
            <Route path='/menu/:dishId' component={DishWithId} />
            <Redirect to="/home" />
        </Switch>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
