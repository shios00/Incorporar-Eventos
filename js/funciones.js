
const lista = document.getElementById("lista")
const lista2 = document.getElementById("listaRHCP")
function agregarCancion(){
    let nombre = prompt("Ingrese Nombre del tema:")
    let acordes = prompt("Ingrese acordes:")
    let artista = prompt("Ingrese nombre del Artista")
    nuevaLista.push(new Cancion(nombre, acordes, artista))
        console.table(nuevaLista)

}
function agregarCancionRhcp(){
    let nombre = prompt("Ingrese Nombre del tema:")
    let acordes = prompt("Ingrese acordes:")
    let artista = prompt("Ingrese nombre del Artista")
    cancionesRHCP.push(new Cancion(nombre, acordes, artista))

}



function buscarCancionRhcp() {
    let input1 = document.querySelector("#nombrecancion").value
    const resultado = cancionesRHCP.find(Cancion => Cancion.nombre === input1)
        if (resultado){
            const li = document.createElement("li")
            li.innerText = resultado.nombre
            lista.append(li)
        } else {
            const li = document.createElement("li")
            li.innerText = "No se encuentra en la lista"
            lista.append(li)
        }
    }


function listaCancionesRhcp(){ 
    for (const Cancion of cancionesRHCP){
      console.log(Cancion.nombre)
          }
    }

function mostrarNombresRHCP() {
            cancionesRHCP.forEach(Cancion => {
                            const li = document.createElement("li")
                              li.innerText = Cancion.nombre
                              lista.append(li)
                })
                
            }
  
