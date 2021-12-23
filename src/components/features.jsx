import React from "react";

class Features extends React.Component {
  render() {
    return (
      <div className=" shadow-2xl rounded-3xl w-5/6 m-auto py-9">
        <h1 className="text-center text-7xl mb-6 capitalize">
          Features products
        </h1>
        <div className="flex items-center justify-between px-20">
          <div className="">
            <h3 className=" max-w-md text-4xl capitalize p-3">
              smoosh zuice bottle
            </h3>
            <p className="max-w-md p-3 text-xl leading-9 pt-0 ">
              top deals at factory price contact directly and get live quotes
              now! production monitoring. logistics service.trade assurance.
              most popular.
            </p>
            <div>
              <div className="flex p-3">
                <div className="mr-7">
                  <h4 className="text-xl capitalize">capacity</h4>
                  <p>100ml to 1L</p>
                </div>
                <div className="ml-7">
                  <h4 className="text-xl capitalize">use for storage</h4>
                  <p>juice</p>
                </div>
              </div>
              <div className="flex p-3">
                <div className="mr-7">
                  <h4 className="text-xl capitalize">cap type</h4>
                  <p>screw cap</p>
                </div>
                <div className="ml-7">
                  <h4 className="text-xl capitalize">material</h4>
                  <p>glasses</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <button className="bg-transparent py-2 px-6 rounded-2xl mr-7 capitalize border-gray-800 border-2">
                details
              </button>
              <button className="bg-black text-white py-2 px-7 border-2 border-black rounded-2xl capitalize">
                buy now
              </button>
            </div>
          </div>
          <div>
            <img
              className="rounded-3xl"
              src="https://picsum.photos/seed/picsum/620/320"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
