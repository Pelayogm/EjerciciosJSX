import "./App.css"
import React from 'react';
import Saludo from './saludo';
import Despedida from './despedida';

const App = () => {
  const mostrarSaludo = true;
  const nombreUsuario = 'Pelayo';
  const parking = [
    { Matricula: '1425 BTY', Marca: 'Peugeot', Modelo: '3008', Tipo: 'Híbrido' },
    { Matricula: '1762 MNY', Marca: 'Mercedes', Modelo: 'EQS', Tipo: 'Diesel' },
    { Matricula: '9882 TPK', Marca: 'Renault', Modelo: '4 E-Tech', Tipo: 'Eléctrico' },
    { Matricula: '6634 TRV', Marca: 'Volkswagen', Modelo: 'Golf', Tipo: 'Gasolina' },
    { Matricula: '2285 RPL', Marca: 'Toyota', Modelo: 'RAV4', Tipo: 'Híbrido' },
    { Matricula: '1782 PRT', Marca: 'Peugeot', Modelo: '5008', Tipo: 'Diesel' },
  ];

  return (
    <div className='App'>
      <h1>Ejercicio 1</h1>
      {mostrarSaludo ? <Saludo nombre={nombreUsuario} /> : <Despedida nombre={nombreUsuario} />}
      <br></br>
      <h1>Ejercicio 2</h1>

      <div className="StyledTextComponent">
      {parking.map((coche) => (
        <ul>
          <li>{coche.Matricula} - {coche.Marca} {coche.Modelo} - ({coche.Tipo})</li>
        </ul>
      ))}
      </div>
    </div>
  );
};

export default App;
