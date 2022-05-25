import Image from "next/image"
import useQuisco from "../hooks/useQuisco"

const Categoria = ({categoria}) => {
    const {categoriaActual, handelClickCategoria} = useQuisco()
    const {nombre, Icono, id} = categoria
  return (
    <div className={`${categoriaActual?.id === id ? 'bg-amber-400': '' } flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}>
        <Image
        alt="imagen icono"
        width={70}
        height={70}
        src={`/assets/img/icono_${Icono}.svg`}
        />
        <button 
        type="button"
        className="text-2xl font-bold hover:cursor-pointer"
        onClick={()=>handelClickCategoria(id)}
        >
            {nombre}
        </button>
    </div>
  )
}

export default Categoria