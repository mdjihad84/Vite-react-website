
import Featured from "./Bikeimages";
const Bikes = [
  {imageUrl: '/images/Feature-bike.png'},
  {imageUrl: '/images/Feature-bike.png'},
  {imageUrl: '/images/Feature-bike.png'},
];

function App() {
  return (
    <div>
      <Featured Bikes={Bikes}/>
    </div>
  );
}
export default App;

