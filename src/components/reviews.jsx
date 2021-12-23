import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Reviews extends React.Component {
  state = {
    data: [
      {
        name: "shiva",
        imageUrl: "https://picsum.photos/200",
        review:
          "at first i was dubious about how much it can actually help me, but i was supried to see after buying this juice bottle it increases my productivity.",
        link: "insta",
      },
      {
        name: "shiva",
        imageUrl: "https://picsum.photos/200",
        review:
          "at first i was dubious about how much it can actually help me, but i was supried to see after buying this juice bottle it increases my productivity.",
        link: "insta",
      },
      {
        name: "shiva",
        imageUrl: "https://picsum.photos/200",
        review:
          "at first i was dubious about how much it can actually help me, but i was supried to see after buying this juice bottle it increases my productivity.",
        link: "insta",
      },
      {
        name: "shiva",
        imageUrl: "https://picsum.photos/200",
        review:
          "at first i was dubious about how much it can actually help me, but i was supried to see after buying this juice bottle it increases my productivity.",
        link: "insta",
      },
      {
        name: "shiva",
        imageUrl: "https://picsum.photos/200",
        review:
          "at first i was dubious about how much it can actually help me, but i was supried to see after buying this juice bottle it increases my productivity.",
        link: "insta",
      },
    ],
  };
  render() {
    return (
      <div className="w-5/6 m-auto">
        <h1>our customers review</h1>
        <div>
          <Carousel>
            <div>
              <img className="w-80" src="https://picsum.photos/800" />
              <p>
                Lorem ipsum dolor sit amet csectetur adipisicing elit. dolore
                vero rerum illo possimus deleniti quo optio ratione.
              </p>
            </div>
            <div>
              <img className="w-80" src="https://picsum.photos/200" />
              <p>
                Lorem ipsum dolor sit amet csectetur adipisicing elit. dolore
                vero rerum illo possimus deleniti quo optio ratione.
              </p>
            </div>
            <div>
              <img className="w-80" src="https://picsum.photos/200" />
              <p>
                Lorem ipsum dolor sit amet csectetur adipisicing elit. dolore
                vero rerum illo possimus deleniti quo optio ratione.
              </p>
            </div>
            <div>
              <img className="w-80" src="https://picsum.photos/200" />
              <p>
                Lorem ipsum dolor sit amet csectetur adipisicing elit. dolore
                vero rerum illo possimus deleniti quo optio ratione.
              </p>
            </div>
            <div>
              <img className="w-80" src="https://picsum.photos/200" />
              <p>
                Lorem ipsum dolor sit amet csectetur adipisicing elit. dolore
                vero rerum illo possimus deleniti quo optio ratione.
              </p>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Reviews;
