import './App.css';
import { useState } from 'react'

function App() {
  // using hooks
    const [showEvents, setShowEvents] = useState(true)
    const [events, setEvents ] = useState([
      {title: "mario's bash", id: 1},
      {title: "bowser's stream", id: 2},
      {title: "race on mo mo", id: 3}
    ])

    console.log(showEvents)

    const handleClick = (id) => {
      setEvents((prevEvents) => {
          return prevEvents.filter((event) => {
            return id !== event.id
        })
      })
      console.log(id)

    }

  return (
    <div className="App">
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>
      )}
      {showEvents && events.map((event, index) => (
        <div key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>delete event</button>
        </div>
      ))}
    </div>
  );
}

export default App;
