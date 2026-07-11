import cakes from "../data/cakes";
import CakeCard from "../components/CakeCard";

function Cake({ addToCart }) {
  return (
    <div className="products">
      {cakes.map((cake) => (
        <CakeCard
          key={cake.id}
          cake={cake}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default Cake;