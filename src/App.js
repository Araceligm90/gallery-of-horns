import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./css/App.css"
import Modal from 'react-bootstrap/Modal';
import data from "./data.json";
import Form from 'react-bootstrap/Form';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      beastName: '',
      beastImage: '',
      beastsData: data
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

  updateBeastsData = (e) => {
    e.preventDefault();
    const horns = e.target.value;
    let updatedData;

    if(horns === '') {
      updatedData = data;
    }
    else if (horns === '1') {
      updatedData = data.filter(beast => beast.horns === parseInt(horns));
    }
    else if (horns === '2') {
      updatedData = data.filter(beast => beast.horns === parseInt(horns));
    }
    else if (horns === '3') {
      updatedData = data.filter(beast => beast.horns === parseInt(horns));
    }
    else if (horns === '100') {
      updatedData = data.filter(beast => beast.horns === parseInt(horns));
    }

    this.setState({
      beastsData: updatedData
    })

  }


  render() {
    return (
      <>
        <Header />
        <Form>
          <Form.Group>
            <Form.Select onChange={this.updateBeastsData}>
              <option value={''}>All my beasts</option>
              <option value={'1'}>One-horned beasts</option>
              <option value={'2'}>Two-horned beasts</option>
              <option value={'3'}>Three-horned beasts</option>
              <option value={'100'}>One hundred-horned beasts!</option>
            </Form.Select>
          </Form.Group>
        </Form>



        <Main
          handleShowModal={this.handleShowModal}
          data={this.state.beastsData}
        />

        <Modal
          show={this.state.showModal}
          onHide={this.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>
              {this.state.beastName}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.state.beastImage} alt={''} height={250} />
          </Modal.Body>
        </Modal>
        <Footer />
      </>
    );
  }
}

export default App;