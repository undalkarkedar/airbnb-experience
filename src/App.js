import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import data from "./data";
import './App.css'
function App() {
  const cards = data.map((item, i) => {
    return (
      <Card
        key={i}
        img={item.img}
        rating={item.rating}
        reviewCount={item.reviewCount}
        country={item.country}
        title={item.country}
        price={item.price}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section>{cards}</section>
    </div>
  );
}

export default App;
