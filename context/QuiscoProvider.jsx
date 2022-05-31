import axios from "axios";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import {toast} from 'react-toastify'


const QuiscoContext =  createContext()

const QuiscoProvider = ({children})  => {
    
    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProducto] = useState({})
    const [modal, setModal] = useState(false)
    const [pedido, setPedido] = useState([])
    const [nombre,setNombre] = useState('')
    const router = useRouter()


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
        router.push('/')
    }
    const handleAgregarPedido = ({categoriaId, ...producto}) => {
        
        if(pedido.some(productoState => productoState.id === producto.id)){
           // Actualizar cantidad
           const pedidoActulizado = pedido.map(productoState => {
               productoState.id === producto.id ? producto : productoState
           })
              setPedido(pedidoActulizado)
        }else {
            setPedido([...pedido,producto])
            toast.success(`${producto.nombre} agregado`)
        }
        setModal(false)
       
    }
    useEffect(()=>{
        obtenerCategorias()
    },[])
    useEffect(()=>{
        setCategoriaActual(categorias[0])
    },[categorias])

    const handleEditarCantidades = id => {
        const productoAtualizar = pedido.filter(producto => producto.id === id)
        setProducto(productoAtualizar[0])
        setModal(!modal)
    }
    const handleEliminarProducto = id => {
        const pedidoEliminar = pedido.filter(producto => producto.id !== id)
        setPedido(pedidoEliminar)
    }

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
            pedido,
            handleEditarCantidades,
            handleEliminarProducto
        }}>
        {children}
        </QuiscoContext.Provider>
    )
}
export { QuiscoProvider }
export default QuiscoContext