import {useState} from 'react'
export function Orcar(){
    const [number, setNumber] = useState()
    const [dia, setDia] = useState()
    return(
        <>
        <input type='text' placeholder='Oramento Nº' value={number} onChange={(e)=>setNumber(e.target.value)} />
        <input type='date'  value={dia} onChange={(e)=>setDia(e.target.value)} />
        <div className='dia'>
           Data: {new Intl.DateTimeFormat('pt-BR',{dateStyle:'short'}).format(dia)}
        </div>
        <div className='ver'>
          Orçamento Nº:  {number}
          <span>
            Validade: 7 dias úteis
          </span>
          
        </div>
        </>
        )
}