import { useState } from "react";
import { AiFillBulb } from "react-icons/ai";

import "./App.css";

const App = () => {
  const [isLight, setIsLight] = useState(false);
  const [numbers, setNumbers] = useState([1,2,3,4,5]);
  const [numbersFiltered, setNumbersFiltered] = useState([]);
  // font-size
  // fontSize

  // condicao ? alguma coisa : outro coisa ? tem outro : outra coisa
  //truthy
  // if(isLight) {
  //   return <h1>Teste</h1>
  // }

  function removeNumber(numberToRemove) {
    console.log(numberToRemove);

    const newNumbers = numbers.filter((number) => number !== numberToRemove);

    setNumbers(newNumbers);

    setNumbersFiltered([])
  }

  return (
    <div className="App">
      todos \ Entrados \ Saidas

      {
        !numbersFiltered.length && numbers.map((number) => (
          <>
            <p key={number}>{number}</p>
            <button onClick={() => removeNumber(number)}>remover</button>
          </>
        ))

      }

      {
        numbersFiltered.length && numbersFiltered.map((number) => (
          <>
            <p key={number}>{number}</p>
            <button onClick={() => removeNumber(number)}>remover</button>
          </>
        ))
      }


      {isLight ? 
        <AiFillBulb style={{ color: "yellow", fontSize: "250px" }} />
       : 
        <AiFillBulb style={{ color: "gray", fontSize: "250px" }} />
      }

      {/* <AiFillBulb 
        style={{ 
          color: isLight ? "yellow" : "gray", 
          fontSize: "250px" 
        }} 
      /> */}

      {/* {isLight && <AiFillBulb style={{ color: "yellow", fontSize: "250px" }} />} */}

      <button type="button" onClick={() => setIsLight(!isLight)}>
        on/off
      </button>
    </div>
  );
};

export default App;
