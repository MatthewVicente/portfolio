import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import QuemSou from './components/QuemSou';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import { Container } from "reactstrap";

function App() {
  const [projects] = useState([
    {
      id: 1,
      title: "Quests of Wisllow",
      description: "Quests of Wisllow é um adventure/casual game 3D desenvolvido para Android. O jogo conta a história de Andrew, um jovem gamer que foi capturado pelo misterioso mago Wisllow e levado para outra dimensão. Para poder retornar para seu mundo, Andrew deve completar as tarefas dadas pelo mago.",
      image: '/projetos/QuestsOfWisllowLogo.png',
      link: 'https://play.google.com/store/apps/details?id=com.Bugnatron.QuestsofWisllow',
      published: true
    },
    {
      id: 2,
      title: "Cold Runner",
      description: "Cold Runner é um endless runner / platformer game 2D desenvolvido em 2 semanas para uma Game Jam. Divirta-se jogando e correndo com esse carinha pegando fogo.",
      image: '/projetos/ColdRunner.png',
      link: 'https://garahorn.itch.io/cold-runner',
      published: true
    },
    {
      id: 3,
      title: "S.E.R.A STUDIO 3D",
      description: "Trabalhei nesse projeto como desenvolvedor freelancer para a empresa S.E.R.A Studio 3D. Utilizei do sistema de Blueprints da Unreal Engine para criar as mecânicas de movimentação, saúde, estamina, comida e de missões do game.",
      image: "/projetos/SERAGame.png",
      link: "teset",
      published: false
    }
  ]);

  return <div className="App">
    <Header/>
    <Container>
      <QuemSou/>
      <Projetos projects={projects}/>
      <Contato/>
    </Container>
    <Footer />
  </div>;
}

export default App;
