import React from 'react';
import List from './composition/list.js';
import Card from './composition/Card.js';

function App(props) {
  return (
      <div>
        <List header='List Title!' list_item = 'List item!' />
      </div>
  )
};


console.log('Hi');

export default App;


//<Card title='h3 title2' content ='p content2'/>