import React, { Component } from "react";

import Card from "../components/Card";

import alucard from "../assets/images/alucard.png";
import goku from "../assets/images/goku.png";
import naruto from "../assets/images/naruto.png";
import saitama from "../assets/images/saitama.png";
import { Container, Row } from "react-bootstrap";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Carousel card 0",
          subTitle: "Carousel card 0 subtitle",
          imgSrc: alucard,
          link: "https://github.com/madalucard",
          selected: false,
        },
        {
          id: 1,
          title: "Carousel card 1",
          subTitle: "Carousel card 1 subtitle",
          imgSrc: goku,
          link: "https://github.com/madalucard",
          selected: false,
        },
        {
          id: 2,
          title: "Carousel card 2",
          subTitle: "Carousel card 2 subtitle",
          imgSrc: naruto,
          link: "https://github.com/madalucard",
          selected: false,
        },
        {
          id: 3,
          title: "Carousel card 3",
          subTitle: "Carousel card 3 subtitle",
          imgSrc: saitama,
          link: "https://github.com/madalucard",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({ items });
  };

  makeItem = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          onClick={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className='justify-content-around'>
          {this.makeItem(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
