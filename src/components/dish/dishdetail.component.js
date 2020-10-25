import React from 'react';
import { Card, CardImg, CardText, CardTitle } from 'reactstrap';
import './dishdetail.scss';
import Comment from '../comment'
import Loading from '../loading/loading.component';

function renderDish(dish){
  return(
    <Card key={dish.id}>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardTitle>{dish.name}</CardTitle>
      <CardText>{dish.description}</CardText>
    </Card>
  );
}

function RenderComments({comments, addComment, dishID}) {
  const commentsList = comments.map((comment) => {
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
      {commentsList}
    </div>
    <div>
      <Comment dishID={dishID} addComment={addComment}></Comment>
    </div>
  </div>
  );
}

const  DishDetail = (props) => {
  const dish = props.dish;
  const comments = props.comments;
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
            <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
            <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  }
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
          <RenderComments comments={comments}
            addComment={props.addComment}
            dishID={props.dish.id}
            />
        </div>
      </div>
    );
  }
}

export default DishDetail;