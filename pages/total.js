import { useCallback, useEffect } from "react";
import useQuisco from "../hooks/useQuisco";
import Layout from "../layout/Layout";
import {formatear} from '../helpers'

export default function Total() {
  const { pedido, nombre, setNombre,colocarOrden,total } = useQuisco();


  const comprobarPedido = useCallback(() => {
    return pedido.length === 0 || nombre === "" || nombre.length < 4;
  }, [pedido,nombre]);

  useEffect(() => {
    comprobarPedido();
  }, [pedido, comprobarPedido]);

  return (
    <Layout pagina="Total y Confirmar Pedidos">
      <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
      <p className="text-2xl my-10">Confirmar tu Pedidpo a Continuación</p>
      <form onSubmit={colocarOrden}>
        <div>
          <label
            htmlFor="nombre"
            className="block uppercase text-slate-800 font-bold text-xl"
          >
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mt-10">
          <p className="text-2xl">
            Total a pagar: {""} <span className="font-bold">{formatear(total)}</span>
          </p>
        </div>
        <div className="mt-5">
          <input
            disabled={comprobarPedido()}
            type="submit"
            value="Confirmar pedido"
            className={` ${
              comprobarPedido()
                ? "bg-indigo-100"
                : "bg-indigo-600 hover:bg-indigo-800"
            } text-center w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white `}
          />
        </div>
      </form>
    </Layout>
  );
}
