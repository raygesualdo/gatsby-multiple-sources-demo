import React, { Fragment } from 'react'
import graphql from 'graphql'
import {
  Row,
  Col,
  Jumbotron,
  Button,
  Card,
  CardTitle,
  CardDeck,
  CardSubtitle,
  CardBody,
  Media,
} from 'reactstrap'
import FontAwesome from 'react-fontawesome'

export default props => (
  <Fragment>
    <Row>
      <Col>
        <Jumbotron className="mt-5 mb-0">
          <Row>
            <Col sm={8}>
              <h1 className="display-3">The Wowza! Product</h1>
              <p className="lead">
                Our product is the best product of all the products!
              </p>
              <hr className="my-2" />
              <p>
                You should definitely use our product. No question. Use it. Use
                it now. I'm going to count to 3 and when I do you're going to
                use our product. Ready? 1...2...3...
              </p>
              <p className="lead">
                <Button color="primary">Learn More</Button>
              </p>
            </Col>
            <Col sm={4}>
              <img
                className="img-fluid"
                src="http://via.placeholder.com/600x800/663399/ffffff?text=Screenshot"
              />
            </Col>
          </Row>
        </Jumbotron>
      </Col>
    </Row>
    <Row className="my-5 py-5">
      <Col sm={12} className="mb-5">
        <h1 className="display-4 text-center">Features</h1>
      </Col>
      {props.data.features.edges.map(({ node: feature }) => (
        <Col key={feature.id} sm="6" md="3" className="text-center">
          <FontAwesome name={feature.icon} size="5x" className="mb-3" />
          <h2 className="mb-3">{feature.title}</h2>
          <p>{feature.description.text}</p>
        </Col>
      ))}
    </Row>
    <Row className="my-5 py-5 bg-dark">
      <Col sm={12} className="mb-5 pt-2">
        <h1 className="display-4 text-center text-light">Pricing</h1>
      </Col>
      <Col sm={{ size: 10, offset: 1 }} className="pb-5">
        <CardDeck>
          {props.data.plans.edges.map(({ node: plan }) => (
            <Card key={plan.id} className="text-center">
              <CardBody>
                <CardTitle>{plan.nickname}</CardTitle>
                <CardSubtitle>
                  {(plan.amount / 100).toLocaleString(undefined, {
                    style: 'currency',
                    currency: plan.currency.toUpperCase(),
                  })}
                </CardSubtitle>
                <hr />
                <ul className="list-unstyled">
                  <li>{plan.nickname} feature 1</li>
                  <li>{plan.nickname} feature 2</li>
                  <li>{plan.nickname} feature 3</li>
                  <li>{plan.nickname} feature 4</li>
                </ul>
                <Button color="primary" block>
                  Get Started
                </Button>
              </CardBody>
            </Card>
          ))}
        </CardDeck>
      </Col>
    </Row>
    <Row className="my-5 py-5">
      <Col sm={12} className="mb-5">
        <h1 className="display-4 text-center">Testimonial</h1>
      </Col>
      {props.data.testimonials.edges.map(({ node: testimonial }) => (
        <Col key={testimonial.id} sm={{ size: 6, offset: 3 }}>
          <Media>
            <Media left href="#">
              <Media
                object
                src={testimonial.frontmatter.avatar}
                alt={testimonial.frontmatter.name}
                className="rounded-circle mr-3"
              />
            </Media>
            <Media body>
              <Media heading>
                {testimonial.frontmatter.name},{' '}
                {testimonial.frontmatter.position}
              </Media>
              <div dangerouslySetInnerHTML={{ __html: testimonial.html }} />
            </Media>
          </Media>
        </Col>
      ))}
    </Row>
    <hr />
    <Row className="my-5 py-5">
      <Col sm={12} className="mb-5">
        <h1 className="display-4 text-center">Blog Articles</h1>
      </Col>
      <Col sm={{ size: 8, offset: 2 }}>
        {props.data.articles.edges.map(({ node: article }) => (
          <div key={article.id} className="mb-5">
            <h1 dangerouslySetInnerHTML={{ __html: article.title }} />
            <img
              className="img-fluid mb-2"
              src={article.img.source_url}
              alt={article.img.alt_text}
            />
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
        ))}
      </Col>
    </Row>
  </Fragment>
)

export const query = graphql`
  query IndexQuery {
    features: allContentfulFeature(sort: { fields: [title] }) {
      edges {
        node {
          id
          title
          icon
          description {
            text: description
          }
        }
      }
    }
    plans: allStripePlan(sort: { fields: [amount] }) {
      edges {
        node {
          id
          amount
          currency
          nickname
          product
        }
      }
    }
    testimonials: allMarkdownRemark(
      limit: 1
      filter: { fileAbsolutePath: { glob: "**/testimonials/**" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            name
            position
            avatar
          }
          html
        }
      }
    }
    articles: allWordpressPost(
      limit: 2
      filter: { status: { eq: "publish" } }
    ) {
      edges {
        node {
          id
          slug
          status
          title
          content
          img: featured_media_url {
            alt_text
            source_url
          }
        }
      }
    }
  }
`
