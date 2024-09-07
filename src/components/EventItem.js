
import React from 'react';
import './EventItem.css';

function EventItem({ evento }) {
  return (
    <div className="evento">
      <div className="evento-info">
        <h2>{evento.name}</h2>
        <div className="evento-details">
          <p>
            <a href={evento.url} target="_blank" rel="noopener noreferrer">
              Mais informações sobre o evento
            </a>
          </p>
          <p>{evento.dayEvento}</p>
          <p>{evento.hoursEvento}</p>
        </div>
      </div>
      <a href={evento.buyTickets} target="_blank" rel="noopener noreferrer" className="botao-chamativo">
        Compre seu ingresso
      </a>
    </div>
  );
}

export default EventItem;
