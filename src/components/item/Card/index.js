import { useState } from "react";
import Botao from "../Button";

const Card = () => {
   const [valor, setValor] = useState(0)

   function Adicionar(){
       setValor(valor + 1)
   }

   function Remover(){
    setValor(valor - 1)
}
    return (
        <div className="card">
                <div className="card-header">
                    Meu Primeiro Card
                </div>
                <div className="card-body">
                    <Botao
                        className="btn btn-success"
                        onClick={Adicionar}
                    >
                        Adicionar
                    </Botao>
                    <p>{valor}</p>
                    <Botao
                        className="btn btn-danger"
                        onClick={Remover}
                    >
                        Remover
                    </Botao>
                </div>
             </div>
    )
}

export default Card;