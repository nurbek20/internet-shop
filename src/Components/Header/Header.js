import React,{useState,useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { MyContext } from '../../Context/My-context';

const Header = () => {
  const {searchClick}=useContext(MyContext)
  const [input,setInput]=useState('')
  const formClick=()=>{
    console.log("input", input)
    searchClick(input)
  }
  return (
    <Navbar sticky="top" variant='dark'  expand="lg"  bg='dark'  >
    <Container>
      <Navbar.Brand  >Navbar scroll</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link><Link className='link' to='/'>Home</Link></Nav.Link>
          <Nav.Link>
            <Link className='link' to='cart'>Cart</Link>
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
          />
          <Button onClick={formClick} variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header