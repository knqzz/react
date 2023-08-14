import { useState } from 'react';
import './index.scss';
import Cabecalho from '../../components/cabecalho';

export default function Carro ()
{ 
 const[total,setTotal]= useState(0);
const[parcelas,setParcelas] =useState(0);
const[jurosMensais,setJurosMensais] =useState(0);
const[valorf,setValorf] =useState(0);
const[vparcelas,setVparcelas]= useState(0);

function parcela(){
let tj = 1 + (jurosMensais/100)

let t = total * Math.pow(tj,parcelas);
setValorf (t.toFixed(2))

let x = t/parcelas;
setVparcelas (x.toFixed(2))

let p = Number(total.replace(',', '.'));

}

return(
<div className='pagina-carros'>
<Cabecalho />

    <div className='mei'>
    <div className='txt'>
        <h1>Simulador de Compra de Veiculo </h1>
        </div>
    <div className='conteiner'>
            <div className='carro'>
                        <img src='/assets/images/carro 2.png' />
            </div>

            <div className='meio'>

            <label> Valor Total : </label>
            <input   value= {total} onChange= {e=>setTotal (e.target.value)}/>

          <div className='parcela' >

          <div className='p1'>
        <label> Parcelas : </label>
        
        <input value= {parcelas} onChange= {e=>setParcelas (e.target.value)}/>
        </div>

        <div className='jm'>
        <label> Juros Mensal (%) : </label>
       
        <input  value= {jurosMensais} onChange={e=>setJurosMensais (e.target.value)}/>
        </div>
        </div>
        <br></br>
        <button onClick={parcela}>Adicionar</button>

<p> Parcela : R$ {vparcelas} </p>
<p>Valor Total : R$ {valorf} </p>
            </div>
    </div>
    </div>
</div>
)
}