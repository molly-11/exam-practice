import { Typography } from "@mui/material"


function  Details({details, showMore}){



  return(

    <Typography>{showMore ? details :""} </Typography>
  )

}

export default Details