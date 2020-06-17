import React, { useState } from 'react';
import './App.css';
import ListItem from './components/ListItem';
import Header from './components/Header';
import QuemSou from './components/QuemSou';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 100px;
`;

function App() {
  const [toDos, setToDos] = useState([
    {
      id: 1,
      name: "Develop my Site",
      description: "Develop my portifolio Web Site to show my skills",
      completed: false
    },
    {
      id: 2,
      name: "Develop AR press kit for my TCC",
      description: "Develop AR press kit to show on my TCC.",
      completed: false
    },
    {
      id: 3,
      name: "Study React",
      description: "Study React again to remember",
      completed: true
    }
  ]);

  const updateToDo = id => {
    const toDosClone = [...toDos];
    
    toDosClone.map(toDoClone => {
      if (toDoClone.id === id) {
        toDoClone.completed = !toDoClone.completed;
      }
    });
    
    setToDos(toDosClone);
  }

  return <div className="App">
    <Header/>
    <Container>
      <QuemSou/>
    </Container>
  </div>;
}

export default App;
