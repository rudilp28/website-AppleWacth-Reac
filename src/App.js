import React, {useState} from 'react';

import './App.css';
import './swich.scss';
import Navbar from './components/Navbar/Navbar';


function App() {

  //state
  const [colorTheme, setColorTheme] = useState('Color-blue');
  
  //set theme
  const handleclick = (theme) => {
    setColorTheme(theme);
    
  }
  

  const t = (colorTheme);
  
  
  return (
    <div className="App">
      
      <div className={`content-box ${colorTheme}`}>
      <Navbar/>

      <div className="clasTitle">
        <h2 className="titleH2">APPLE WATCH</h2>
        <p className="infoText">Uma ampla tela Retina para você ver mais com um olhar. Sensores avançados que registram todas as suas atividades. Recursos poderosos para manter você saudável e seguro. Apple Watch SE. Tem tudo para você gostar.</p>
        <button className="button01">Buy</button>
      </div>


      <h1 className="title">{t}</h1>
      
      

      <div className="theme-option">
        <div id="Color-blue"onClick={() => handleclick('Color-blue')}
         className={`${colorTheme === 'Color-blue' ? 'active' : ''}`}>
          <img className={`img1 ${colorTheme}`} src="https://i.ibb.co/McnsqQ9/watch-azul.png" alt=""/>
        </div>

        <div id="Color-orange"onClick={() => handleclick('Color-orange')}
         className={`${colorTheme === 'Color-orange' ? 'active' : ''}`}>
          <img className={`img2 ${colorTheme}`} src="https://i.ibb.co/9GnYwsp/watch-laranja.png" alt=""/>
        </div>

        <div id="Color-white" onClick={(selectImage) => handleclick('Color-white')}
          className={`${colorTheme === 'Color-white' ? 'active' : ''}`}>
          <img className={`img3 ${colorTheme}`} src="https://i.ibb.co/vjzCqJm/watch-branco.png" alt=""/>
        </div>
        
        <div id="Color-green"onClick={() => handleclick('Color-green')}
         className={`${colorTheme === 'Color-green' ? 'active' : ''}`}>
          <img className={`img4 ${colorTheme}`} src="https://i.ibb.co/xYDrrV5/watch-verde.png" alt=""/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
