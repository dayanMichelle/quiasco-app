import { createContext } from "react";

const QuiscoContext =  createContext()

const QuiscoProvider = ({children})  => {
    return (
        <QuiscoContext.Provider value={{

        }}>
        {children}
        </QuiscoContext.Provider>
    )
}
export { QuiscoProvider }
export default QuiscoContext