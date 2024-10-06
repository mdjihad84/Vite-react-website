
import Featured from "./Bikeimages";
const bikes = [
  {imageUrl: '/public/images/Feature-bike.png'},
  {imageUrl: '/public/images/Feature-bike.png'},
  {imageUrl: '/public/images/Feature-bike.png'},
];

function App() {
  return (
    <div>
      <Featured bikes={bikes}/>
    </div>
  );
}
export default App;

