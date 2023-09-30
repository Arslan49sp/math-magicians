import { useState } from 'react';
import InputButton from './InputButton';
import calculate from '../logic/calculate';

function Calculator() {
  const number = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
  const [result, setResult] = useState({ total: null, next: null, operation: null });
  const { total, next, operation } = result;

  const handleClickButton = (e) => {
    const input = e.target.innerHTML;
    setResult(calculate(result, input));
  };
  return (
    <div className="calc-container">
      <div className="result-screen">{next || operation || total || 0}</div>
      {number.map((n) => {
        if (n === '÷' || n === 'x' || n === '-' || n === '+' || n === '=') {
          return <InputButton inputSymbol={n} key={n} background="red" handleClickButton={handleClickButton} />;
        }
        return <InputButton inputSymbol={n} key={n} background="gray" handleClickButton={handleClickButton} />;
      })}
    </div>
  );
}

export default Calculator;
