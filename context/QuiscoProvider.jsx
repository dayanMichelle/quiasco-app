import axios from "axios";
import { createContext, useEffect, useState } from "react";

const QuiscoContext =  createContext()

const QuiscoProvider = ({children})  => {
    const [categorias, setCategorias] = useState([])
    const obtenerCategorias = async () => {
        const {data} = await axios.get('/api/categorias')
        setCategorias(data)
    }
    useEffect(()=>{
        obtenerCategorias()
    },[])
    return (
        <QuiscoContext.Provider value={{
            categorias
        }}>
        {children}
        </QuiscoContext.Provider>
    )
}
export { QuiscoProvider }
export default QuiscoContext