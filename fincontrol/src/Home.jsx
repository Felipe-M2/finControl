import './App.css';
import { useState} from 'react';

import Header from './Components/Header/Header';
import MenuLateral from './Components/MenuLateral/MenuLateral';
import Compras from './Components/Compras/Compras';
import Emergencia from './Components/Emergencia/Emergencia';
import Investimentos from './Components/Investimentos/Investimento';
import Supermecado from './Components/Supermecado/Supermecado';
import Viagens from './Components/Viagens/Viagens'

function Home() {

  const [componentAtual, setComponentAtual] = useState('comp');

  const renderizarComponents = ()=>{
    if(componentAtual === 'comp'){
      return <Compras/>;
    }else if(componentAtual === 'emgc'){
      return <Emergencia/>
    }else if(componentAtual === 'invest'){
      return <Investimentos/>
    }else if(componentAtual === 'sup'){
      return < Supermecado />
    }else if(componentAtual === 'viagens'){
      return < Viagens />
    }
  }

  return (
    <section className='aplication'>
        
        <Header setComponentAtual={setComponentAtual} />

        <main className="main">

          <MenuLateral setComponentAtual={setComponentAtual} />

          {renderizarComponents()}

        </main>
    </section>
  )
}

export default Home
