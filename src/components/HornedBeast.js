import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import '../css/HornedBeast.css';

class HornedBeast extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clickedFavorite: false,
            favoriteCount: 0
        };
    };

    handleFavorite = () => {
        this.setState({
            clickedFavorite: true,
            favoriteCount: this.state.favoriteCount + 1
        })
    };

    fillAndShowModal = () =>{
        this.props.handleShowModal(this.props.title, this.props.imageUrl);
    }

    render() {
        return (
            <Col className="beasts">   
                <Card style={{ width: '18rem' }}>
                    <Card.Title onClick={this.fillAndShowModal} as='h3' >{this.props.title}</Card.Title>
                    <Card.Text onClick={this.fillAndShowModal}>{this.props.description}</Card.Text>
                    <Card.Img src={this.props.imageUrl}
                        alt={this.props.description}
                        title={this.props.title}
                        height={200}
                        onClick={this.handleFavorite}/>
                    {this.state.clickedFavorite ? <Card.Text>Favorited: 👍 {this.state.favoriteCount} </Card.Text> : <Card.Text>Not Favorited: 👎</Card.Text>}
                </Card>
            </Col>
        )
    }
};
export default HornedBeast