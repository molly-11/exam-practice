import { useState } from "react";
import Button from '@mui/material/Button';

import Details from "./Details";

function ButtonSubs({ name, details }) {
  const [showMore, setShowmore] = useState(false);

  return (
    <>
      <div className="charData">
        <p>{name} </p>
        <Details showMore={showMore} details={details} />
      </div>
      <Button
      variant="contained"
        type="button"
        onClick={() => {
          setShowmore(!showMore);
        }}
      >
        {" "}
        {showMore ? "Show more" : "Show less"}{" "}
      </Button>{" "}
      
    </>
  );
}
export default ButtonSubs;
