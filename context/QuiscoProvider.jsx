import axios from "axios";
import { createContext, useEffect, useState } from "react";

const QuiscoContext =  createContext()

const QuiscoProvider = ({children})  => {
    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProducto] = useState({})
    const [modal, setModal] = useState(false)


    const obtenerCategorias = async () => {
        const {data} = await axios.get('/api/categorias')
        setCategorias(data)
    }
    const handleSetProducto = (producto) => {
        setProducto(producto)
    }
    const handleChangeModal = () => {
        setModal(!modal)
    }
    useEffect(()=>{
        obtenerCategorias()
    },[])
    useEffect(()=>{
        setCategoriaActual(categorias[0])
    },[categorias])
    const handelClickCategoria = (id) => {
        const categoria = categorias.filter( cat => cat.id === id)
        setCategoriaActual(categoria[0])
    }

    return (
        <QuiscoContext.Provider value={{
            categorias,
            handelClickCategoria,
            categoriaActual,
            handleSetProducto,
            producto,
            handleChangeModal,
            modal
        }}>
        {children}
        </QuiscoContext.Provider>
    )
}
export { QuiscoProvider }
export default QuiscoContext