import React from "react";
import "/Users/user/pixelhape/src/App.css"
import{ connect} from "/Users/user/pixelhape/src/App.js"
import Navbar from "/Users/user/pixelhape/src/Components/Navbar.js"; 
import Meme from "/Users/user/pixelhape/src/Components/Meme.jsx"
import Home from "/Users/user/pixelhape/src/Components/Home.js"
import Home2 from "/Users/user/pixelhape/src/Components/Home2.js"
import Home3 from "/Users/user/pixelhape/src/Components/Home3.js"
import Home4 from "/Users/user/pixelhape/src/Components/Home4.js"
import Tierbox from '/Users/user/pixelhape/src/Components/Tierbox.js'
// import {Container, Row, Col} from 'react-bootstrap'


function App() {
    return (
      <div className="Container">
        <Navbar />
        <div className="body">
      
          <img className="first"src={require('/Users/user/pixelhape/src/assets/41DB378C-B272-4085-B28E-31F1EB225EB3.png')} />
        <Home />
        <img style={{width: '100%'}} src={require('/Users/user/pixelhape/src/assets/Rectangle 3 line.png')} />

        </div>
          <div className="page2">
            <Home2 />
          </div>
          <div className="page3">
            <Home3 />
          </div>
          
          <div className="page4">
            <Home4 />
          </div>
        </div>
        
      // <section className="container">
      // <Container>
      //    <Navbar />
      //   <Row className="align-item-center">
      //     <Col xs={12} md={6} xl={7}>
      //       <img style={{width: '300px'}} className="first"src={require('./41DB378C-B272-4085-B28E-31F1EB225EB3.png')} />
          
      //     </Col>
      //     <Col x5={12} md={6} xl={7}>
      //     <span>    </span>
      //     <h1 style={{color: 'black'}}>Pixelated Apes+ on the Hedera Hashgraph </h1>
      //    <p style={{color: 'black'}}>I do not have any idea as to which my airtel is doing this way, it has been</p>
    

      //     </Col>
      //   </Row>
      // </Container>
      // </section>

    )}
  export default App;
  
  