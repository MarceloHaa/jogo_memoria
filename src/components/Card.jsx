import React from 'react'

const Card = ({card, onClick}) => {
  return (
    <div className={`card ${card.isflipped ? "flipped" : ""}`}
     onClick={() => onClick(card)}
     
     >     
      {card.isflipped ? card.value : "?"}
      </div>
  );
};

export default Card