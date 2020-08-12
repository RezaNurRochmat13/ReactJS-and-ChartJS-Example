import React from 'react';
import './App.css';
import {Bar} from 'react-chartjs-2';

function App() {
  const fruitsData = {
    labels: ['Day One', 'Day Two', 'Day Three'],
    datasets: [
      {
        label: 'Apple',
        data: [65, 33, 35],
        backgroundColor: '#112233'
      },
      {
        label: 'Mangos',
        data: [28, 29, 30],
        backgroundColor: '#78C1FF'
      },
      {
        label: 'Jackfruit',
        data: [30, 31, 32],
        backgroundColor: '#ff78c1'
      },
    ]
  };
  return (
    <div className="App">
      <p>Loha</p>
      <Bar
      data={fruitsData}
      title="My Charts"
      color="#70CAD1" />
    </div>
  );
}

export default App;
