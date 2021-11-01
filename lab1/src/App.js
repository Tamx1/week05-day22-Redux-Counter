import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {increment_count , decrement_count , reset_count} from "./reducers/Number/Number";

function App() {

  const dis = useDispatch();

  
  const S = useSelector((S) => {
    return { Number: S.Number.Number};});



  const increment = () =>{
    dis(increment_count(S.Number.Num));
  }

  const Decrement = () =>{

    dis(decrement_count(S.Number.Num));
  }

  const Reset = () =>{

    dis(reset_count(S.Number.Num));
  }



  return (

    <div className="d0">

    <h1>{S.Number.Num}</h1>
    <button type="button" onClick={increment}>Increment +</button>  
    <button type="button" onClick={Decrement}>Decrement -</button>  
    <button type="button" onClick={Reset}>Reset 0</button>  

    </div>
  );
}

export default App;
