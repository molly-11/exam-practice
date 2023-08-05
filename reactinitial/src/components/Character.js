
import Button from "./Button";


function Character(props) {
  const data = props.fetchedData;
  

  return (
    <>
      {data.map((dt) => (
        <div key={dt.name} className="charContainer">
          
          
          
           
          
          <Button name = {dt.name} details={dt.details}/>

        </div>
      ))}
     
    </>
  );
}

export default Character;
