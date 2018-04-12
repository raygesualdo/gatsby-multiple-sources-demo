import React from 'react'
import Helmet from 'react-helmet'
import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

const globalStyles = `
  html,
  body {
    background-color: #F5F3F7 !important;
    background-color: #F9F8FC !important;
  }
`

export default props => (
  <Container className="bg-white">
    <Helmet>
      <link
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      {/* <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.1.0/materia/bootstrap.min.css" rel="stylesheet"/> */}
      <link
        href="https://stackpath.bootstrapcdn.com/bootswatch/4.1.0/pulse/bootstrap.min.css"
        rel="stylesheet"
      />
      {/* <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.1.0/sketchy/bootstrap.min.css" rel="stylesheet"/> */}
      {/* <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.1.0/yeti/bootstrap.min.css" rel="stylesheet"/> */}
      <style>{globalStyles}</style>
    </Helmet>
    <Navbar
      dark
      expand="sm"
      className="bg-dark"
      style={{ marginLeft: '-15px', marginRight: '-15px' }}
    >
      <NavbarBrand href="/">Wowza!</NavbarBrand>
      <NavbarToggler />
      <Collapse isOpen={true} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="#">Docs</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Blog</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
    <div>{props.children()}</div>
    <Row className="mt-5 p-5 bg-dark text-light text-center">
      <Col>
        <p className="m-0">
          Wowza! is a fictional product. This site highlights <a className="text-secondary" href="https://www.gatsbyjs.org/">Gatsby's</a> features. Hosted on <a className="text-secondary" href="https://www.netlify.com/">Netlify</a> and source code on <a className="text-secondary" href="https://github.com/raygesualdo/gatsby-multiple-sources-demo">GitHub</a>.
        </p>
      </Col>
    </Row>
  </Container>
)
