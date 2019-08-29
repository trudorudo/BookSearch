import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";


export default function Book({ title, author, link, description, image, Button }) {
    return (
        <ListItem>
            <Row className="flex-wrap-reverse">
                <Col size="md-8">
                    <h2> {title} </h2>
                </Col>
                <Col size="md-4">
                    <div className="btn-container">
                        <a className="btn" target="_blank" href={link}>
                            View
                        </a>
                        <Button />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col size="md-6">
                    <p>Written by {author}</p>
                </Col>
            </Row>
            <Row>
                <Col size="12 sm-4 md-2">
                    <img className="img-thumbnail img-fluid w-100" src={image} alt={title} />
                </Col>
                <Col size="12 sm-8 md-10">
                    <p>{description}</p>
                </Col>
            </Row>
        </ListItem >
    )
}