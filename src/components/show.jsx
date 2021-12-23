import React from "react";
import ShowItem from "./showItem";
class Show extends React.Component {
  state = {
    datas: [],
    price: [20, 30, 10, 23, 41, 32, 12, 33, 4, 13, 90],
  };
  handleSearch = (query) => {
    fetch(
      `https://api.unsplash.com/search/photos/?query=${query}&client_id=QQbGFfWPjW9cerI5hlDvAErNitxTl7q1syqim_K7WdY`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ datas: data.results }))
      .catch((error) => console.log(error));
  };
  componentDidMount() {
    fetch(
      "https://api.unsplash.com/search/photos/?query=glas bottle&client_id=QQbGFfWPjW9cerI5hlDvAErNitxTl7q1syqim_K7WdY"
    )
      .then((response) => response.json())
      .then((data) => this.setState({ datas: data.results }))
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div className="py-8 w-5/6 m-auto mt-10">
        <h1 className="text-center text-6xl">Our Showcase</h1>

        <ul className="flex  py-5 capitalize justify-center ">
          <li
            onClick={() => this.handleSearch("glass bottles")}
            autoFocus
            className=" hover:underline cursor-pointer mr-5 "
          >
            glass bottles
          </li>
          <li
            onClick={() => this.handleSearch("plastic bottles")}
            className="hover:underline cursor-pointer mr-5"
          >
            plastic bottles
          </li>
          <li
            onClick={() => this.handleSearch("glass jar")}
            className="hover:underline cursor-pointer mr-5"
          >
            glass jar
          </li>
          <li
            onClick={() => this.handleSearch("plastic jar")}
            className="hover:underline cursor-pointer"
          >
            plastic jar
          </li>
        </ul>

        <div className="grid grid-cols-4 gap-3 mt-4">
          {this.state.datas.map((data) => (
            <ShowItem name={data.user.name} price="10" url={data.urls.thumb} />
          ))}
        </div>
      </div>
    );
  }
}

export default Show;
