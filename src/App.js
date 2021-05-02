import React from 'react'
import "./App.css";
import MadeWithLove from 'react-made-with-love';
import logo from"./assets/airdoodle.png";
import { Canvas } from './Canvas'
import { ClearCanvasButton } from './ClearCanvasButton';
import  {Container, Row, Col,Button } from 'reactstrap';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
  CustomInput,
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
  const percentage = 66;
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
        <Button style={{marginLeft:"200px"}}>Save To Cloud</Button>
        
        <h5 style={{textAlign:"center",marginLeft:"800px"}} >Uptime : Nil</h5>
        <div style={{marginLeft:"800px"}}>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />;
        </div>




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
      <footer style={{textAlign:"center",marginRight:"150px"}}>
  <h6 style={{display:"inline"}}>Made with ❤️ At  </h6>
  <h6 style={{display:"inline"}}>RU Hacks</h6>
</footer>

      </div>
      </div>
    </>
  );
}

export default App;
