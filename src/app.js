import React, { useState } from 'react';

function App() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const checkPrime = () => {
    const num = parseInt(number);

    if (isNaN(num)) {
      setResult('Por favor, ingresa un número válido.');
    } else if (num < 2) {
      setResult('Los números primos son mayores o iguales a 2.');
    } else {
      let isPrime = true;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) {
        setResult(`${num} es un número primo.`);
      } else {
        setResult(`${num} no es un número primo.`);
      }
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de Números Primos</h1>
      <div className="input-container">
        <label htmlFor="number">Ingresa un número:</label>
        <input type="number" id="number" min="2" value={number} onChange={(e) => setNumber(e.target.value)} />
      </div>
      <button className="calculate-button" onClick={checkPrime}>Verificar</button>
      <p className="result-text">{result}</p>
    </div>
  );
}

export default App;
