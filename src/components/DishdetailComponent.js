import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    renderDish(dish) {
        if (dish != null) {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>  
                </Card>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    renderComments(dish) {
        if (dish != null) {
            return(
                <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    <li className="mb-3">{dish.comments[0].comment}</li>
                    <li className="mb-3">-- {dish.comments[0].author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(dish.comments[0].date)))}</li>

                    <li className="mb-3">{dish.comments[1].comment}</li>
                    <li className="mb-3">-- {dish.comments[1].author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(dish.comments[1].date)))}</li>

                    <li className="mb-3">{dish.comments[2].comment}</li>
                    <li className="mb-3">-- {dish.comments[2].author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(dish.comments[2].date)))}</li>

                    <li className="mb-3">{dish.comments[3].comment}</li>
                    <li className="mb-3">-- {dish.comments[3].author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(dish.comments[3].date)))}</li>

                    <li className="mb-3">{dish.comments[4].comment}</li>
                    <li className="mb-3">-- {dish.comments[4].author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(dish.comments[4].date)))}</li>
                    
                </ul>
            </div>
            );
            
        }
        else {
            return(
                <div></div>
            );
            
        }
        
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish)}
                    </div>
                </div>   
            </div>       
        );
    }
}

export default DishDetail;