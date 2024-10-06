// import React from 'react';

const Card = ({ title, description, imageUrl , isActive}) => {
    return (
        <div className="card shadow-xl p-6 border border-solid w-[25rem]">
            <div>
                <img src={imageUrl} alt="XDIAVEL S-73" className="w-full"/>
            </div>
            <div className="card-body">
                <h2 className="card-title text-black font-bold">{title}</h2>
                <p>{description}</p>
                <button className={`btn  text-white px-6 mt-4 border-none w-40 ${isActive ? 'hover:bg-green-600' : 'bg-red-400 hover:bg-red-500'}`}>Read More</button>
            </div>
      </div>
    );
};
export default Card;