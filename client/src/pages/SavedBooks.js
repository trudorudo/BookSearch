import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import SearchForm from "../components/Form";
import API from "../utils/API";
import Book from "../components/Book";
import "./style.css";


class savedBooks extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.getSavedBooks()

      .then(res => this.setState({
        books: res.data
      }))

      .catch(err => console.log(err));
  };


  handleBookDelete = id => {
    API.deleteBook(id)
    .then(res => this.getSavedBooks());
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>My Library</h1>
            </Jumbotron>
            
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            {this.state.books.length ? (
              <List>
                
                {this.state.books.map(book => (
                  
                  <Book
                 
                    key={book.id}
                    title={book.title}
                    subtitle={book.subtitle}
                    link={book.infoLink}
                    authors={book.authors.join(", ")}
                    description={book.description}
                    image={book.image}
                    Button={() => (
                      <button
                        onClick={() => this.handleBookDelete(book._id)}
                        className="btn btn-primary ml-2"
                      >
                        Delete
                            </button>
                    )}
                  />
                ))}
              </List>
            ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default savedBooks;
