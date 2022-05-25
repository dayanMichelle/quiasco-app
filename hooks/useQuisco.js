import { useContext } from "react";
import QuiscoContext from "../context/QuiscoProvider";

const useQuisco = () =>{
    return  useContext(QuiscoContext)
}
export default useQuisco;