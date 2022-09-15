import './App.css';
import {useState} from "react";
function App() {

const [expression, setExpression] = useState("");
const [answer, setAnswer] = useState(0);

const display = (symbol) => (
  setExpression(prev => prev + symbol)
);

const calculate = () => ( // eslint-disable-next-line
  setAnswer(eval(expression)),
  setExpression((prev) => prev + "=")
);

const clear = () => ( // eslint-disable-next-line
  setExpression(""),
  setAnswer(0)
);

  return (
    <div className="container">
     <div className="grid">
      <div onClick={display} className="display" id="display">
        <input type="text" value={expression} placeholder="0" disabled />
        <div className='total'>{answer}</div>
      </div>
      <div onClick={clear} className="padButton C red" id="clear">C</div>
      <div onClick={() => display("/")} className="padButton div" id="divide">/</div>
      <div onClick={() => display("*")} className="padButton multiply" id="multiply">*</div>
      <div onClick={() => display("7")} className="padButton seven darkGray" id="seven">7</div>
      <div onClick={() => display("8")} className="padButton eight darkGray" id="eight">8</div>
      <div onClick={() => display("9")} className="padButton nine darkGray" id="nine">9</div>
      <div onClick={() => display("-")} className="padButton substract" id="substract">-</div>
      <div onClick={() => display("4")} className="padButton four darkGray" id="four">4</div>
      <div onClick={() => display("5")} className="padButton five darkGray" id="five">5</div>
      <div onClick={() => display("6")} className="padButton six darkGray" id="six">6</div>
      <div onClick={() => display("+")} className="padButton add" id="add">+</div>
      <div onClick={() => display("1")} className="padButton one darkGray" id="one">1</div>
      <div onClick={() => display("2")} className="padButton two darkGray" id="two">2</div>
      <div onClick={() => display("3")} className="padButton three darkGray" id="three">3</div>
      <div onClick={calculate} className="padButton equals" id="equals">=</div>
      <div onClick={() => display("0")} className="padButton zero darkGray" id="zero">0</div>
      <div onClick={() => display(".")} className="padButton decimal darkGray" id="decimal">.</div>
     </div>
    </div>
  );
}

export default App;
