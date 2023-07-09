import { useState } from 'react'

export function Tabelas(){
        const[quant, setQuant] = useState()
        const[desc, setDesc] = useState()
        const[val, setVal] = useState()
        const total = val*quant
        // 2
        const[quant2, setQuant2] = useState()
        const[desc2, setDesc2] = useState()
        const[val2, setVal2] = useState()
        const total2 = val2*quant2
        
        // 3
        const[quant3, setQuant3] = useState()
        const[desc3, setDesc3] = useState()
        const[val3, setVal3] = useState()
        const total3 = val3*quant3
        
        // 4
        const[quant4, setQuant4] = useState()
        const[desc4, setDesc4] = useState()
        const[val4, setVal4] = useState()
        const total4 = val4*quant4

        
        const totalizado = total+total2+total3+total4

        
    return(
     <>   
     
     <div className='campos'>
       
        <input className='quantidade' type='text'  placeholder='Quant.'  value={quant} onChange={(e)=>setQuant(e.target.value)} />
        <input className='desc' type='text' placeholder='Descrição'  value={desc} onChange={(e)=>setDesc(e.target.value)} />
        <input className='val' type='text' placeholder='Valor'  value={val} onChange={(e)=>setVal(e.target.value)} />
        <br />
        <input className='quantidade2' type='text'placeholder='Quant.'  value={quant2} onChange={(e)=>setQuant2(e.target.value)} />
        <input className='desc2' type='text' placeholder='Descrição' value={desc2} onChange={(e)=>setDesc2(e.target.value)} />
        <input className='val2' type='text' placeholder='Valor' value={val2} onChange={(e)=>setVal2(e.target.value)} />
        <br />
        <input className='quantidade3' type='text' placeholder='Quant.' value={quant3} onChange={(e)=>setQuant3(e.target.value)} />
        <input className='desc3' type='text' placeholder='Descrição' value={desc3} onChange={(e)=>setDesc3(e.target.value)} />
        <input className='val3' type='text'placeholder='Valor'  value={val3} onChange={(e)=>setVal3(e.target.value)} />
        <br />
        <input className='quantidade4' type='text'placeholder='Quant.'  value={quant4} onChange={(e)=>setQuant4(e.target.value)} />
        <input className='desc4' type='text'placeholder='Descrição'  value={desc4} onChange={(e)=>setDesc4(e.target.value)} />
        <input className='val4' type='text' placeholder='Valor' value={val4} onChange={(e)=>setVal4(e.target.value)} />
               
      </div>  
      
        <table>
            <tr>
                <td>{quant}</td>
                <td>{desc}</td>
                <td>R$ {total.toFixed(2)}</td>
            </tr>
            <tr>
                <td>{quant2}</td>
                <td>{desc2}</td>
                <td>R$ {total2.toFixed(2)}</td>
            </tr>
            <tr>
                <td>{quant3}</td>
                <td>{desc3}</td>
                <td>R$ {total3.toFixed(2)}</td>
            </tr>
            <tr>
                <td>{quant4}</td>
                <td>{desc4}</td>
                <td>R$ {total4.toFixed(2)}</td>
            </tr>
        </table> 
        <hr />
        <div>
            <table className='total' >
                <tr>
                    <td>TOTAL</td>
                    <td>R$ {totalizado.toFixed(2)}</td>
                </tr>
            </table>
           
        </div>
     </>      
    )
}