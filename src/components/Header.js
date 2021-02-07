import React, { Component } from 'react';
import {Navbar,Nav,Container,Form,FormControl,Button } from 'react-bootstrap';
import logo from '../logo.svg'
export default class Header extends Component {
    render(){
       return (
        // short fragment for routing 
        <> 
        <Navbar fixed = "top" collapseOnSelect expand = "md" bg ="light" vatiant="light">
     
          <Container>
            <Navbar.Brand href ="/">
              <img
              src={logo}
              height = "30"
              width = "30"
              className = "d-inline-block align-top"
              alt = "Logo"
              />
            </Navbar.Brand>
            <h4>Veronika</h4>
            <Navbar.Toggle aria-controls = "responsive-navbar-nav"/>
            
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link  href="/">Home </Nav.Link>
 // <Nav.Link as={Link} to="/about" > About us</Nav.Link>
                    
                    <Nav.Link  href="/about">About me </Nav.Link>
                    <Nav.Link  href="/contacts">Contacts </Nav.Link>
                    <Nav.Link  href="/blog">Blog </Nav.Link>
                </Nav>
                <Form inline>
                <FormControl
                    type = "text"
                    placeholder = "Search"
                    className = "mr-sm-2"
                    />
                    <Button variant = "outline-info">Search</Button>
                </Form>
            </Navbar.Collapse>
          </Container>
      </Navbar>
      <Router>
        <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route exact path = "/about" component = {About}/>
          <Route exact path = "/contacts" component = {Contacts}/>
          <Route exact path = "/blog" component = {Blog}/>
        </Switch>
      </Router>

      </>
       )
    }
}
