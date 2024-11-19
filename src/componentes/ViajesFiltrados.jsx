import viajes from "../viajes.json"

export function ViajesFiltrados(){
    const filtrados = viajes.filter(function(elemento, index){
        return elemento.precio > 1500
    })

    console.log(filtrados)

    return(
        <div style={{border: "1px solid black"}} className="componente">
            <h3>Componente Viajes Filtrados</h3>

            <ul>
                {
                    filtrados.map(function(elemento, index){
                        return(<li key={index}>{elemento.destino}</li>)
                    })
                }
            </ul>
        </div>
    )
}