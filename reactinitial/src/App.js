import React, { useEffect, useState } from "react";
import LoadingMask from "./components/LoadingMask";
import Character from "./components/Character";
import Subscription from "./components/Subscription";
import { Typography } from "@mui/material";

const URL = "https://demoapi.com/api/series/howimetyourmother";
const App = () => {
  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
    fetch(URL)
      .then((r) => r.json())
      .then((data) => {
        setFetchedData(data);
      });
  }, []);

  return (
    <>
      <div>
        <Typography variant="h1" sx={{  fontSize: '3rem', textAlign: "center"}} >
          Series Api
        </Typography>
        {!fetchedData && <LoadingMask />}
        {fetchedData && <Character fetchedData={fetchedData} />}
      </div>
      <Subscription />
    </>
  );
};

export default App;
