import NavBar from "./components/navBar";
import ShowCase from "./components/showCase";
import "./App.css";
import Features from "./components/features";
import Show from "./components/show";
import Item from "./components/item";
import Article from "./components/article";
import Reviews from "./components/reviews";

function App() {
  return (
    <div className=" bg-green-800 ">
      <NavBar />
      <ShowCase />
      <Features />
      <Show />
      <Item />
      <Article />
      <Reviews />
    </div>
  );
}

export default App;
