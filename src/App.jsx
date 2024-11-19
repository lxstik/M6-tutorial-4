import { ConsolaForEach } from "./componentes/ConsolaForEach";
import viajes from "./viajes.json"
import { Viajes } from "./componentes/Viajes";
import { ViajesFiltrados } from "./componentes/ViajesFiltrados";


export default function App(){

  console.log("componente App guardado")
  console.log(viajes);

  return(
    <>
      
      <h1>App principal</h1>
      <p>hola xd</p>

      <ConsolaForEach/>

      <Viajes/>
      
      <ViajesFiltrados/>
    </>
  )
}