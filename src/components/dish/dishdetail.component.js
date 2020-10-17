import React from 'react';
import { Card, CardImg, CardText, CardTitle } from 'reactstrap';

function renderDish(dish){
  return(
    <Card key={dish.id}>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardTitle>{dish.name}</CardTitle>
      <CardText>{dish.description}</CardText>
    </Card>
  );
}

function renderComments(commentlist) {
  const comments = commentlist.map((comment) => {
      return (
        <ul key={comment.id} className="list-unstyled">
          <li>{comment.comment}</li>
          <li>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
        </ul>
      )
  });
  return (
  <div>
    <h4>Comments</h4>
    <div>
      {comments}
    </div>
  </div>
  );
}

const  DishDetail = (props) => {
  const dish = props.dish;
  const comments = props.comments;
  if (!dish) {
    return(<></>);
  }
  else {
    return (
      <div className="row">
        <div className="col-md-5">
          {renderDish(dish)}
        </div>
        <div className="col-md-5">
          {renderComments(comments)}
        </div>
      </div>
    );
  }
}

export default DishDetail;