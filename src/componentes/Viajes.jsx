import viajes from "../viajes.json"

export function Viajes(){
    const listaViajes = viajes.map(function(elemento, index){
        return elemento.destino
    })

    console.log(listaViajes)

    return(
        <div style={{border: "1px solid black"}} className="componente">
            <h3>Componente Viajes</h3>

            <ul>
                {
                    viajes.map(function(elemento, index){
                        return(<li key={index}>{elemento.destino}</li>)
                    })
                }
            </ul>
        </div>
    )
}