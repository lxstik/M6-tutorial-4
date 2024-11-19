# React + Vite

1. `npm create vite@latest .` para empezar creando el vite, el punto al final sirve para crearlo en la raíz directamente
2. elegimos el proyecto `React`
3. elegir la opción `JavaScript` + SWC
4. `npm install` para conseguir `node_modules`
5. `npm run dev` para iniciar la proyecto con la configuración que viene por defecto
6. vamos al archivo de nuestro proyecto `App.jsx` y borramos todo
7. creamos una función que se exporta y ponemos un return con un párrafo dentro:

export default function App(){
  return(
    <p>Holaaaaaaaaaa</p>
  )
}

8. cambiamos el contenido para meterlo denrto de una div:

export default function App(){
  return(
    <>
      <h1>App principal</h1>
      <p>hola xd</p>
    </>
  )
}

! si no habría el `div` padre, saldría error, es necesario crear los objetos dentro de al menos una div padre ¡

9. para sacar algo por consola, había puesto andes del `return` un `console.log("componente app guardado")`
10. he creado `viajes.json` en la carpeta `/src` y lo he llenado con el código del tutorial. Quedó de la siguiente manera:

[
  {
    "id": 1,
    "destino": "París",
    "duracion": "5 días",
    "precio": 1200
  },
  {
    "id": 2,
    "destino": "Nueva York",
    "duracion": "7 días",
    "precio": 2000
  },
  {
    "id": 3,
    "destino": "Tokio",
    "duracion": "10 días",
    "precio": 3000
  }
]

11. ahora he importado el archivo `viajes.json` añadiendo la línea arriba de la función App, la línea es la siguiente: `import viajes from "./viajes.json"`
12. he sacado por consola `viajes`. Archivo quedó de la siguiente manera:

import viajes from "./viajes.json"

export default function App(){

  console.log("componente App guardado")
  console.log(viajes);

  return(
    <>
      <h1>App principal</h1>
      <p>hola xd</p>
    </>
  )
}

13. creamos nuevo componente `ConsolaForEach` dentro de nueva carpeta creada `componentes` y creamos y exportamos nueva función para que el archivo quede de la siguiente manera:

export function ConsolaForEach(){
    console.log("creando el componente ConsolaForEach")

    return(
        <>
            <h3>vista de ConsolaForEach</h3>
        </>
    )
}

14. importamos este componente, en la función `App`, quedará de la siguiente manera:

import { ConsolaForEach } from "./componentes/ConsolaForEach";
import viajes from "./viajes.json"


export default function App(){

  console.log("componente App guardado")
  console.log(viajes);

  return(
    <>
      <ConsolaForEach/>
      <h1>App principal</h1>
      <p>hola xd</p>
    </>
  )
}

15. Aplicamos algo de estilo a la finción `ConsolaForEach.jsk` añadiendo la etiqueta `style` a la `div` padre, queda de la siguiente manera:

export function ConsolaForEach(){
    console.log("creando el componente ConsolaForEach")

    return(
        <div style={{border:"1px solid black"}}>
            <h3>vista de ConsolaForEach</h3>
        </div>
    )
}

16. creamos clase `componente` añadiendo las siguientes líneas en `index.css`:

.componente{
  color: gray;
  margin: 5px;
  padding: 5px;
  background-color: #f9f9f9;
}

17. cambiamos la `div` padre en `ConsolaForEach.jsk` para añadir la clase `.componente`, quedará así:

<div style={{border:"1px solid black"}} className="componente">

18. importamos viajes en `ConsolaForEach.jsk`, el archivo quedará así:

import viajes from "../viajes.json"

export function ConsolaForEach(){
    console.log("creando el componente ConsolaForEach")
    console.log("consola,", viajes)

    return(
        <div style={{border:"1px solid black"}} className="componente">
            <h3>vista de ConsolaForEach</h3>
        </div>
    )
}

19. en `ConsolaForEach.jsk` antes de `return` creamos un `forEach` con una función anonima dentro, que contiene 2 elementos: `elemano, index`:

viajes.forEach(function(elemento, index){

})

20. dentro de este `forEach` escribimos `console.log("elemento", elemento)`, así nos sacará por consola cada elemento de las `id 0, 1, 2`, resultado:

viajes.forEach(function(elemento, index){
  console.log("elemento", elemento)
})

21. creamos nuevo componente `Viajes.jsk` dentro de la carpeta `componentes` que tenga la estructura parecida a la de `ConsolaForEach.jsk`, así queda:

import viajes from "../viajes.json"

export function Viajes(){
    return(
        <div style={{border: "1px solid black"}} className="componente">
            <h3>Componente Viajes</h3>
        </div>
    )
}

22. no olvidamos de importar y utilizar este componente en `App.jsk`:

import { ConsolaForEach } from "./componentes/ConsolaForEach";
import viajes from "./viajes.json"
import { Viajes } from "./componentes/Viajes";

export default function App(){

  console.log("componente App guardado")
  console.log(viajes);

  return(
    <>
      
      <h1>App principal</h1>
      <p>hola xd</p>

      <ConsolaForEach/>

      <Viajes/>
    </>
  )
}

23. ahora miramos otro metodo de recorrer el bucle en vez de utilizar `.forEach`, el metodo se llama `.map`, es lo mismo

viajes.map(function(elemento, index){
  console.log("elemento", elemento)
})

24. la diferencia del `.map` de `.forEach` es que con el `.map` se pueden guardar los datos dentro de un array:

const listaViajes = viajes.map(function(elemento, index){
  return(elemento.index)
})

25. para vizualizarlo escribimos `console.log(listaViajes)`. código completo de `Viajes.jsk`:

import viajes from "../viajes.json"

export function Viajes(){
    const listaViajes = viajes.map(function(elemento, index){
        return(elemento.index)
    })

    console.log(listaViajes)

    return(
        <div style={{border: "1px solid black"}} className="componente">
            <h3>Componente Viajes</h3>
        </div>
    )
}

26. Añadimos javascript dentro de `Viajes.jsk`, creamos una `<ul></ul>` para meter dentro las `<li>` con un `.map`:

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

27. creamos un componente nuevo `ViajesFiltrados.jsk`, repetimos todo el código menos el bucle de antes (no olvidamos de importar el componente en `App.jsk`)

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

28. para filtrar el array ELIMINANDO el item que queramos solo hay que cambiar el filtro por lo siguiente: `elemento.id != 2`, esto crea un array nuevo pero SIN los objetos del id 2