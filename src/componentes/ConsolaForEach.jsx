import viajes from "../viajes.json"

export function ConsolaForEach(){
    console.log("creando el componente ConsolaForEach")
    console.log("consola,", viajes)

    viajes.forEach(function(elemento, index){
            console.log("elemento", elemento)
    })

    

    

    return(
        <div style={{border:"1px solid black"}} className="componente">
            <h3>vista de ConsolaForEach</h3>
        </div>
    )

    
}