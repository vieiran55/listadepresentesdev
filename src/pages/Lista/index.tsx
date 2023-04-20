import { Link } from "react-router-dom";
import estilos from "./Lista.module.scss";
import listaDeCompras from "../../dados/listadepresentes.json";
import ListaItens from "./ListaItens";
import { BsArrowUpCircleFill } from "react-icons/bs";
import Atencao from "../../components/Atencao";

export default function Lista() {

  const topo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={estilos.corpo}>
      <Atencao />
      <h1 className={estilos.corpo__casal}>Gabriela e Antonio</h1>
      <h2 className={estilos.corpo__titulo}>LISTA DE PRESENTES</h2>
      <ol className={estilos.corpo__lista}>
        {listaDeCompras.map((item) => (
          <ListaItens key={item.id} {...item} />
        ))}
      </ol>
      <button className={estilos.botoes__tipo__up} onClick={topo}>
        <BsArrowUpCircleFill />
        VOLTAR AO TOPO
      </button>
    </div>
  );
}