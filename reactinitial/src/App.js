import React, { useEffect, useState } from "react";
import LoadingMask from "./components/LoadingMask";
import Character from "./components/Character";
import Subscription from "./components/Subscription";

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
          <h1>Series Api</h1>
          {!fetchedData && <LoadingMask />}
          {fetchedData && <Character fetchedData={fetchedData} />}
        </div>
      <Subscription />
    </>
  );
};

export default App;
