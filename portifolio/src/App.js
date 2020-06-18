import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import QuemSou from './components/QuemSou';
import styled from 'styled-components';
import Projetos from './components/Projetos';

const Container = styled.div`
  margin: 0 100px;
`;

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Quests of Wisllow",
      description: "Quests of Wisllow é um adventure/casual game 3D desenvolvido para Android. O jogo conta a história de Andrew, um jovem gamer que foi capturado pelo misterioso mago Wisllow e levado para outra dimensão. Para poder retornar para seu mundo, Andrew deve completar as tarefas dadas pelo mago.",
      image: '/projetos/QuestsOfWisllowLogo.png',
      link: 'https://play.google.com/store/apps/details?id=com.Bugnatron.QuestsofWisllow',
      published: true
    },
    {
      id: 2,
      name: "Cold Runner",
      description: "Cold Runner é um endless runner / platformer game 2D desenvolvido em 2 semanas para uma Game Jam. Divirta-se jogando e correndo com esse carinha pegando fogo.",
      image: '/projetos/ColdRunner.png',
      link: 'https://garahorn.itch.io/cold-runner',
      published: true
    }
  ]);

  return <div className="App">
    <Header/>
    <Container>
      <QuemSou/>
      <Projetos projects={projects}/>
    </Container>
    <Footer />
  </div>;
}

export default App;
