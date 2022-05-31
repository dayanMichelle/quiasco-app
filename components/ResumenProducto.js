import Image from "next/image";
import { formatear } from "../helpers";

const ResumenProducto = ({ producto }) => {
  return (
    <div className="shadow p-5 mb-3 flex gap-10 items-center">
      <div className="md:w-1/6">
        <Image
          width={300}
          height={400}
          alt={`Imagen del producto ${producto.nombre}`}
          src={`/assets/img/${producto.imagen}.jpg`}
        />
      </div>
      <div className="md:w-5/6">
        <p className="text-3xl font-bold">{producto.nombre}</p>
        <p className="text-xl font-bold">{`Cantidad: ${producto.cantidad}`}</p>
        <p className="text-xl font-bold text-amber-500">{`Cantidad: ${formatear(
          producto.cantidad
        )}`}</p>

        <p className="text-xl text-gray-700  mt-2">{`Subtotal: ${formatear(
          producto.precio * producto.cantidad
        )}`}</p>
      </div>
    </div>
  );
};

export default ResumenProducto;
