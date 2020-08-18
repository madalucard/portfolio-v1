/* eslint-disable no-undef */
import React from "react";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Carousel card 0",
          subTitle: "Carousel card 0 subtitle",
          imgSrc: img0,
          link: "https://github.com/madalucard",
          selected: false,
        },
        {
          id: 1,
          title: "Carousel card 1",
          subTitle: "Carousel card 1 subtitle",
          imgSrc: img1,
          link: "https://github.com/madalucard",
          selected: false,
        },
        {
          id: 2,
          title: "Carousel card 2",
          subTitle: "Carousel card 2 subtitle",
          imgSrc: img2,
          link: "https://github.com/madalucard",
          selected: false,
        },
      ],
    };
  }

  render() {
    return <p>Carousel work!</p>;
  }
}

export default Carousel;
