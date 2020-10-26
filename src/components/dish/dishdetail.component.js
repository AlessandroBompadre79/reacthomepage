import React from 'react';
import { Card, CardImg, CardText, CardTitle } from 'reactstrap';
import './dishdetail.scss';
import Comment from '../comment'
import Loading from '../loading/loading.component';
import { baseUrl } from '../../shared/endpoints/baseUrl';
import { FadeTransform } from 'react-animation-components';

function renderDish(dish){
  return(
    <FadeTransform in transformProps={{ exitTransform: 'scale(0.5) translateY(-50%)'}}>
      <Card key={dish.id}>
        <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </Card>
    </FadeTransform>
  );
}

function RenderComments({comments, postComment, dishID}) {
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
      <Comment dishID={dishID} postComment={postComment}></Comment>
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
            postComment={props.postComment}
            dishID={props.dish.id}
            />
        </div>
      </div>
    );
  }
}

export default DishDetail;