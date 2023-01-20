import React from "react";
import HornedBeast from "./HornedBeast";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class Main extends React.Component {
    render() {
        return (
            <div className="myBeasts">
                <Container>
                    <Row xs={1} s={2} md={4}>
                        {this.props.data.map((beast, idx) => <HornedBeast
                            id={beast._id}
                            imageUrl={beast.image_url}
                            title={beast.title}
                            description={beast.description}
                            horns={beast.horns}
                            key={idx}
                            handleShowModal={this.props.handleShowModal}
                        />
                        )}
                    </Row>
                </Container>

            </div>
        )
    }
}
export default Main