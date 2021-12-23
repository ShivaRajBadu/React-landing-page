import React from "react";

class ShowItem extends React.Component {
  render() {
    const { url, name, price } = this.props;
    return (
      <div className="text-center shadow-md py-4">
        <img className="rounded-full w-28 m-auto" src={url} alt="" />
        <p className="text-xl  capitalize pt-3">{name}</p>
        <p className="pt-1">price:${price}</p>
        <button className="border-2 rounded-3xl py-2 px-4 bg-transparent text-white mt-3">
          Order Now
        </button>
      </div>
    );
  }
}

export default ShowItem;
