import React from 'react'
import "./App.css";
import logo from"./assets/airdoodle.png";
import { Canvas } from './Canvas'
import { ClearCanvasButton } from './ClearCanvasButton';
import  {Container, Row, Col,Button } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';


function App() {
 
  return (
    <>
  
 {/* <Container> */}
 <div className="mybg">
 <div>
      <Navbar style={{backgroundColor:"#24305C"}} light expand="md">
        <NavbarBrand href="/"></NavbarBrand>
      
       
          <Nav className="mr-auto" navbar>

            
            <NavItem style={{marginLeft:"750px"}}>
            <img src={logo} width="450px" height="75px" alt="image"></img>
            </NavItem>
            
          </Nav>
          <NavbarText style={{color:"white"}}>Paired With : Dji Tello </NavbarText>
        
      </Navbar>
      
      <br></br>
    </div>
    <div style={{marginLeft:"25px"}}>
 <Row xs="2">
        <Col>
        <p style={{borderStyle:"solid",borderWidth:"5px"}}>
        <div style={{height:"500px",width:"500px"}}>
       <Canvas></Canvas>
        </div>
        </p>
        </Col>
        
        <Col>
        <p style={{borderStyle:"solid",borderWidth:"5px"}}>
        <div style={{height:"500px",width:"500px"}}>
       <Canvas></Canvas>
        </div>
        </p>
        </Col>
        <Col>
        
        <Button style={{marginLeft:"100px",backgroundColor: "#24305C"}}>Calibrate</Button>
        </Col>
        
        <Col>
        <FormGroup>
        <Label style={{backgroundColor: "#24305C",
  color: "white",
  padding: "0.5rem",
  fontFamily: "sans-serif",
  borderRadius: "0.3rem",
  cursor: "pointer",
  margintop:"3rem",
  marginTop:"30px",
  marginLeft:"350px"}} for="upload">Import Doodle</Label>
        <Input type="file"  id="upload" hidden />
        <FormText color="muted">
        
        </FormText>
      </FormGroup>
        {/* <div>
        <Button>Import Image</Button>
        </div> */}
        
        <ClearCanvasButton ></ClearCanvasButton>
        {/* <Button style={{marginLeft:"300px",marginBottom:""}}>Hello</Button> */}
        </Col>
     
      </Row>

      </div>
      </div>
    </>
  );
}

export default App;
