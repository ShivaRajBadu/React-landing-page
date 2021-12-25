import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Reviews extends React.Component {
  render() {
    return (
      <div className="w-5/6 m-auto bg-green-900 mt-10 p-8 rounded-lg mb-5">
        <h1 className="text-center text-5xl capitalize pb-6">
          our customers review
        </h1>
        <div>
          <Carousel
            showArrows={false}
            infiniteLoop={true}
            showIndicators={true}
            stopOnHover={true}
            useKeyboardArrows={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={5000}
          >
            <div className="p-8">
              <div className="w-20 mr-auto ml-auto h-auto">
                <img
                  className="max-w-xs rounded-full  "
                  src="https://picsum.photos/100"
                />
              </div>

              <p className="p-5 max-w-sm m-auto">
                Lorem ipsum dolor sit amet csectetur adipisicing elit. dolore
                vero rerum illo possimus deleniti quo optio ratione.
              </p>
            </div>
            <div className="p-8">
              <div className="w-20 mr-auto ml-auto h-auto">
                <img
                  className="max-w-xs rounded-full  "
                  src="https://picsum.photos/200"
                />
              </div>

              <p className="p-5 mb-3 max-w-sm m-auto">
                Lorem ipsum dolor sit amet csectetur adipisicing elit. dolore
                vero rerum illo possimus deleniti quo optio ratione.
              </p>
            </div>
            <div className="p-8">
              <div className="w-20 mr-auto ml-auto h-auto">
                <img
                  className="max-w-xs rounded-full  "
                  src="https://picsum.photos/300"
                />
              </div>

              <p className="p-5 max-w-sm m-auto">
                Lorem ipsum dolor sit amet csectetur adipisicing elit. dolore
                vero rerum illo possimus deleniti quo optio ratione.
              </p>
            </div>
            <div className="p-8">
              <div className="w-20 mr-auto ml-auto h-auto">
                <img
                  className="max-w-xs rounded-full  "
                  src="https://picsum.photos/400"
                />
              </div>

              <p className="p-5 max-w-sm m-auto">
                Lorem ipsum dolor sit amet csectetur adipisicing elit. dolore
                vero rerum illo possimus deleniti quo optio ratione.
              </p>
            </div>
            <div className="p-8">
              <div className="w-20 mr-auto ml-auto h-auto">
                <img
                  className="max-w-xs rounded-full  "
                  src="https://picsum.photos/500"
                />
              </div>

              <p className="p-5 max-w-sm m-auto">
                Lorem ipsum dolor sit amet csectetur adipisicing elit. dolore
                vero rerum illo possimus deleniti quo optio ratione.
              </p>
            </div>
            <div className="p-8">
              <div className="w-20 mr-auto ml-auto h-auto">
                <img
                  className="max-w-xs rounded-full  "
                  src="https://picsum.photos/600"
                />
              </div>

              <p className="p-5 max-w-sm m-auto">
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
