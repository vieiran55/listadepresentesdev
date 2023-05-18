import { useEffect } from "react";
import { IOpcoes } from "../../interfaces/IOpcoes";
import axios from "axios";

interface Props{
  repositorio: IOpcoes[]
  setRepositorio: React.Dispatch<React.SetStateAction<IOpcoes[]>>
}


export default function Repositorio({repositorio, setRepositorio}: Props){
  
  useEffect(() => {
    axios
      .get("http://160.238.36.99:5000/listadepresentes")
      .then((resposta) => {
        setRepositorio(resposta.data);
        console.log(repositorio);
        console.log("estou em repositorio");
      })
      .catch((erro) => { 
        console.log(erro);
      });
  }, []);

  return(
    <></>
  );
}