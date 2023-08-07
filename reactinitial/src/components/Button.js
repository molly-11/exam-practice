import { useState } from "react";
import Button from '@mui/material/Button';

import Details from "./Details";
import { Box, Typography } from "@mui/material";

function ButtonSubs({ name, details }) {
  const [showMore, setShowmore] = useState(false);

  return (
    <>
    

    <Box
    className="charData"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <div className="charData">
        <Typography font-family= "Arial">{name} </Typography>
        <Details showMore={showMore} details={details} />
      </div>
      <div>
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

      </div>


    </Box>

      
    </>
  );
}
export default ButtonSubs;
