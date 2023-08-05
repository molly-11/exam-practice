import { useState } from "react";

import Details from "./Details";

function Button({ name, details }) {
  const [showMore, setShowmore] = useState(false);

  return (
    <>
      <div className="charData">
        <p>{name} </p>
        <Details showMore={showMore} details={details} />
      </div>
      <button
        type="button"
        onClick={() => {
          setShowmore(!showMore);
        }}
      >
        {" "}
        {showMore ? "Show more" : "Show less"}{" "}
      </button>{" "}
      
    </>
  );
}
export default Button;
