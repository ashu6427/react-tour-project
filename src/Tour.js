import React, { useState } from "react";
// {
//   id, image, info, price, name, removetour;
// }
const Tour = (props) => {
  const [readmore, setreadmore] = useState(false);

  return (
    <article className="single-tour">
      <img src={props.image} alt={props.name}></img>
      <footer>
        <div className="tour-info">
          <h4>{props.name}</h4>
          <h4 className="tour-price">${props.price}</h4>
        </div>
        <p>
          {readmore ? props.info : `${props.info.substring(0, 200)}...`}
          <button onClick={() => setreadmore(!readmore)}>
            {readmore ? "Show less" : "Read more"}
          </button>
        </p>
        <button className="ok-btn">Interested</button>
        <button
          className="delete-btn"
          onclick={() => props.removetour(props.id)}
        >
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
