import React, { useEffect, useState } from 'react';
import EventItem from './EventItem';
import './EventList.css';

function EventList() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    async function fetchEventos() {
      try {
        const response = await fetch('https://trabalho-final-unifor-1.onrender.com/eventos/disponibles');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const eventos = await response.json();
        setEventos(eventos);
      } catch (error) {
        console.error('Houve um problema com a requisição:', error);
      }
    }

    fetchEventos();
  }, []);

  return (
    <div id="eventos-lista">
      {eventos.map(evento => (
        <EventItem key={evento.id} evento={evento} />
      ))}
    </div>
  );
}

export default EventList;
