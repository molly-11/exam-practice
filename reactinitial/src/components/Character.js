
import ButtonSubs from "./Button";



function Character(props) {
  const data = props.fetchedData;
  

  return (
    <>
      {data.map((dt) => (
        <div key={dt.name} className="charContainer">
          
          
          
           
          
          <ButtonSubs name = {dt.name} details={dt.details}/>

        </div>
      ))}
     
    </>
  );
}

export default Character;
