import React from 'react';
import List from './components/List'
import ItemType from './types'
import Form from './components/Form';

const data: Array<ItemType> = [
  { name: "McDonalds", id: 1 },
  { name: "Hawaiian Poke", id: 2 },
  { name: "Pom & Flora", id: 3 }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Content">
          <List data={data} />
          <Form />
        </div>
      </header>
    </div>
  );
}

export default App;
