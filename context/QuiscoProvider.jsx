import axios from "axios";
import { createContext, useEffect, useState } from "react";

const QuiscoContext =  createContext()

const QuiscoProvider = ({children})  => {
    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProducto] = useState({})
    const [modal, setModal] = useState(false)
    const [pedido, setPedido] = useState([])


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
    const handelClickCategoria = (id) => {
        const categoria = categorias.filter( cat => cat.id === id)
        setCategoriaActual(categoria[0])
    }
    const handleAgregarPedido = ({categoriaId, imagen, ...producto}) => {
        
        if(pedido.some(productoState => productoState.id === producto.id)){
           // Actualizar cantidad
           const pedidoActulizado = pedido.map(productoState => {
               productoState.id === producto.id ? producto : productoState
           })
              setPedido(pedidoActulizado)
        }else {
            setPedido([...pedido,producto])
        }
        setModal(false)
       
    }
    useEffect(()=>{
        obtenerCategorias()
    },[])
    useEffect(()=>{
        setCategoriaActual(categorias[0])
    },[categorias])
   

    return (
        <QuiscoContext.Provider value={{
            categorias,
            handelClickCategoria,
            categoriaActual,
            handleSetProducto,
            producto,
            handleChangeModal,
            modal,
            handleAgregarPedido,
            pedido
        }}>
        {children}
        </QuiscoContext.Provider>
    )
}
export { QuiscoProvider }
export default QuiscoContext