import './App.css'
import {Orcar} from './paginas/Orcar'
import {Tabelas} from './paginas/Tabelas'
import { Topo } from './paginas/Topo'

function App() {

  function mostra(e){
    e.preventDefault()
    const ver = document.querySelector('.ver')
    const dia = document.querySelector('.dia')
    const tabela = document.querySelector('table')
    const campos = document.querySelector('.campos')
    const num = document.querySelector('input[type=text]')
    const data = document.querySelector('input[type=date]')
    

    const totalzao = document.querySelector('.total')

    campos.style.display = 'none'
    data.style.display = 'none'
    num.style.display = 'none'

    


    ver.style.display = 'block'
    dia.style.display = 'block'
    tabela.style.display = 'block'
    totalzao.style.display = 'block'
   
  }
  return (

    <form class='brd'>
      <Topo/>
      <Orcar/>
      <div className='dado brd'>
        <Tabelas/>      
      </div>
    <button onClick = {mostra}></button>
    
    </form>
    
    

  )
}

export default App
