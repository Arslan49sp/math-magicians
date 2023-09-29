import React from 'react';
import InputButton from './InputButton';

const number = [
  'AC',
  '9',
  '%',
  '\u00F7',
  7,
  8,
  9,
  '\u00D7',
  4,
  5,
  6,
  '-',
  1,
  2,
  3,
  '+',
  0,
  '.',
  '=',
];

function Calculator() {
  return (
    <div className="calc-container">
      <div className="result-screen">0</div>
      {number.map((n) => {
        if (n === '\u00F7' || n === '\u00D7' || n === '-' || n === '+' || n === '=') {
          return <InputButton inputSymbol={n} key={n} background="red" />;
        }
        else
        return <InputButton inputSymbol={n} key={n} background="gray" />;
      })}
    </div>
  );
}

export default Calculator;
