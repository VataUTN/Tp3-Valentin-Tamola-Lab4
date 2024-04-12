// CardItem.tsx
import React, { FC } from 'react';
import { Instrumento } from '../entities/instrumento';
import '../index.css'; // Importa el archivo CSS con los estilos

const CardItem: FC<Instrumento> = ({ cantidadVendida, costoEnvio, descripcion, id, imagen, instrumento, marca, modelo, precio }) => {
  return (
    <div className="card">
      <img src={`/img/${imagen}`} alt={instrumento} className="card-image" />
      <div className="card-info">
        <h2 className="card-title">{instrumento}</h2>
        <p className="card-description">{descripcion}</p>
        <p className="card-price">${precio}</p>
        <p className="card-sold">Vendidos: {cantidadVendida}</p>
        <p className="card-shipping">Costo de envío: {costoEnvio === 'G' ? 'Gratis' : `$${costoEnvio}`}</p>
      </div>
    </div>
  );
};

export default CardItem;
