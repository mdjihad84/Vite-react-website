
import { useState } from "react";
import Card from "./Card";

const Latest = () => {
  const [cards] = useState([
    {
      id: 1,
      title: 'Ducati XDIAVEL S-73',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.',
      imageUrl: '/images/Latest1.png',
    },
    {
      id: 2,
      title: 'Motorcycles & Scooters',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.',
      imageUrl: '/images/Latest2.png',
    },
    {
      id: 3,
      title: '2021 Honda CBR500R',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.',
      imageUrl: '/images/Latest3.png',
    },
  ])
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-5xl font-semibold text-black my-10 mb-20">Latest News</h1>
        </div>
        {/* All Cards */}
        <div className="flex justify-center gap-6 mt-6">
          {cards.map((card, index) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              isActive={index === 0}/>))}
        </div>
      </div>
    </div>
  );
};
export default Latest;