import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./css/App.css"
import Modal from 'react-bootstrap/Modal';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      beastName: '',
      beastImage: ''
    }
  }

  handleShowModal = (name, beastPic) => {
    this.setState({
      showModal: true,
      beastName: name,
      beastImage: beastPic
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }



  render() {
    return (
      <>
        <Header />
        <Main
          handleShowModal={this.handleShowModal}
        />
        <Footer />
        <Modal
          show={this.state.showModal}
          onHide={this.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>
              {this.state.beastName}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.state.beastImage} alt={''} height={250}/>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default App;