import React from "react";

class ShowCase extends React.Component {
  render() {
    return (
      <div className="h-full flex flex-col w-5/6 mt-9 m-auto py-11">
        <div className="h-full flex justify-between ">
          <div className="flex flex-col max-w-xl mt-8 ">
            <h2 className="text-7xl  block">
              Exclusive <span className="inline-block">Zuice Bottle</span>
            </h2>
            <p className="pt-6 text-xl  leading-10 h-auto">
              we've created a water bottle capable of manually squeezing friut
              juice, and becoming a unique object for daily use that helps you
              connect with a healthier life
            </p>
          </div>
          <div>
            <img className="max-w-sm" src="../images/bottle.jpg" alt="" />
          </div>
        </div>

        <div
          className=" w-9/12 justify-around m-auto
         bg-gray-600 rounded-full shadow-lg flex  items-center   mt-10"
        >
          <div className="  ">
            <img
              className="rounded-full h-auto w-20"
              src="https://picsum.photos/seed/picsum/200/300"
              alt=""
            />
          </div>
          <div className="">
            <p className=" w-80  leading-8 ">
              "Our team has explored new functionalities, new ergonomics, the
              feeling of the materials, and analyze the user experience of using
              an innovative object{" "}
              <button className="text-black underline" href="#">
                Read more
              </button>
            </p>
          </div>
          <div className="  ">
            <iframe
              className=" w-96 rounded-full  py-5 px-5
              "
              width="240"
              height="200"
              src="https://www.youtube.com/embed/SqGRnlXplx0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowCase;
