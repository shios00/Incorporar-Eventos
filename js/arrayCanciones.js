

function Cancion(nombre, acordes, artista) {
    this.nombre = nombre;
    this.acordes = acordes;
    this.artista = artista;
}

const cancion1 = new Cancion("Californication", 
                              "Verso: Am - F - C - G - Dm // Estribillo C - G - Dm - Am",
                              "Red Hot chillie peppers"
                             );

                                                  
const cancion2 = new Cancion("Dani California", 
                             "Verso: Am - G - Dm - Am  // Estribillo F - C - D - G",
                             "Red Hot chillie peppers"
                            );

const cancion3 = new Cancion( "Dark Necessities", 
                            "Verso: Cm - Ab7 - Cm7 - F - Cm7 // Estribillo Eb - Db - Fm - Ab",
                            "Red Hot chillie peppers"
                           )

const cancion4 = new Cancion( "GoodBye Angel", 
                           "Verso: Dm - Bn7 - C7 - Gm - Gm7 // Estribillo G - A - Fm - Db",
                          "Red Hot chillie peppers"
                          )

const cancion5 = new Cancion( "Taste the Pain", 
                           "Verso: Em - Dm - C7 - B",
                           "Red Hot chillie peppers"
                         )


const cancionesRHCP = [cancion1, cancion2, cancion3, cancion4, cancion5];
const nuevaLista = [];

const canciones = nuevaLista.concat(cancionesRHCP);
 

canciones;

