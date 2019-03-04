# PokeHack World!

**PokeHack** es para jugadores expertos en *Pokemon Go* donde el objetivo es conocer los tipos y las debilidades de tu oponente y así poder ganar todas las batallas posibles. 

# Definición del producto

El proceso para el diseño de ***PokeHack*** fue variando dependiendo de las necesidades del usuario ya que fue el elemento principal para definir como luciría el producto final. Esta webapp es para jugadores expertos de Pokemon Go que necesitan conocer el tipo así como las debilidades de los Pokemons para poder ganar sus batallas contra sus contrincantes. Es por eso que después de la pantalla de bienvenida, aparecen dos selectores: ‘tu Pokemon’ y ‘su contricante’ donde posteriormente despliega la imagen, tipo y debilidades de los Pokemons seleccionados.

También se sugirió que se debía de implementar un calculador para que el usuario pudiera conocer los candies que necesita su pokemon para la siguiente evolución. El usuario ingresa la cantidad de candies que tiene hasta el momento (del pokemon elegido) y le muestra cuantos le faltan.

Los diseños variaron ya que se fueron modificando de acuerdo a las necesidades de los usuarios y probándolos para que .

## ¿Cómo se benefician los usuarios?

Debido a que los jugadores necesitan determinar si su Pokemon es lo suficientemente fuerte para enfrentar una batalla ya que se le muestran las características básicas y/o necesarias para que conozca más a fondo su elección *(Pokemon favorito)*. Adicionalmente, se le ayuda al usuario a darle **el resultado** del número de candies que necesita su Pokemon para pasar a la siguiente evolución.

# Historias de usuario

Son las historias que describen la funcionalidad que debe incluir la webapp y cuya implementación aporta valor al cliente.

## Pantalla de inicio y botón *conocer*

El usuario necesita visualizar en la pantalla de inicio dos botones: conocer y Pokedex. Al seleccionar el botón de ‘conocer’ lo mandara a una segunda pantalla donde elegirá su Pokemon y un oponente ( de su preferencia) para que conociendo sus habilidades (tipos y debilidades), determine cual ganará.

### DOD
   
 - [x] El usuario visualiza: encabezado, objetivo de la página y dos botones en la pantalla principal. 
 - [x] Todas las pantallas se encuentran ocultas.
 - [x] En la pantalla de ‘conocer’,  hay dos selectores, que al darles *click* se despliega la lista con los nombres de los 151 Pokemons ordenados alfabéticamente.
 - [x] Una vez seleccionado el nombre de su Pokemon y su oponente, se cargan las imágenes cada uno.
 - [x] El usuario visualiza las imágenes según la opción del selector que
   corresponda.

## Tipos y debilidades de los Pokemons
El usuario necesita visualizar el tipo y las debilidades de los 2 Pokemons seleccionados (*su Pokemon y su oponente)* para que se desplieguen dichas características y así el pueda determinar su favorito. También puede conocer cuantos candies le faltan para la siguiente evolución de su Pokemon


DOD

 - [x] Al seleccionar al Pokemon y su oponente, se despliegan las debilidades y tipos de cada uno.
 - [x] El usuario tiene opción de salir de la pantalla y también regresar a la pantalla de inicio (*home*).
 - [x] El jugador ingresa la cantidad de candies con los que cuenta su Pokemon y en el instante le muestra los que le faltan para la siguiente evolución.

## Pokedex

El usuario quiere conocer todos los Pokemons de la región Kanto mostrando su imagen así como sus características básicas.

###DOD

 - [ ] Se muestran los 151 pokemons de la región Kanto  así como su información básica: nombre, imagen, tipo y debilidades.
 - [x] El usuario visualiza estilo y colores de la página terminada.

# Diseño de la interfaz

**Prototipo de baja fidelidad**
![Tipos y debilidades](https://lh3.googleusercontent.com/lPKe_7BVWPQ7IrmEl3guqI8vZs9R3ZudD8iGkSMdccucXR1W1g9IxdtPiMbpm38ja9zmmKhvs4ezCg "Tipos y debilidades")![enter image description here](https://lh3.googleusercontent.com/kpJTtH7BGaRnEbvzT56mnWACS0SODDnqGOICZP7mDV67NHpFx2wsaktsfUkApHVIjxAKtEYZBdDcpw "Pantalla de Inicio")![enter image description here](https://lh3.googleusercontent.com/FKtuzDgdmpqSu-KOooSj6zrg2CF2WzkZzUhdF4bx_7foomEqomtEs5cTFalQlpzgfAPYhbdKS2o14Q "Comparar")





**Prototipo de alta fidelidad**

En el siguiente enlace, se puede encontrar el diseño y el flujo de la ***PokeHack***. [Figma diseño](https://www.figma.com/file/Vcx4SCw6GVRCX3V3mmVX0mTY/pokemon?node-id=0:1)

# Testeos de usabilidad

Al tener las primeras interacciones con el usuario, surgieron dudas si lo que representaba ser botón, en realidad lo era, por lo que se cambio el diseño de todos los botones así como los nombre que aparecían en cada uno, ya que no describía lo que realmente realizaban.

Por otro lado, el usuario planteo la idea de mostrar las listas en orden alfabético con los nombres de los Pokemons, ya que la idea original era que él lo escribiera *(en un input)* pero al enfrentarse que eran 151, era a veces complicado recordar la ortografía de cada uno. Y se aplico dicha sugerencia a los dos selectores *(Pokemon y oponente).*

También mencionó que al tratarse de una página sobre Pokemon, los colores pudieran ser similares a los del juego: azul, amarillo y rojo, por lo que se tomo en cuenta su recomendación para el diseño.

Finalmente, recomendó el hecho de tener un calculador donde el jugador ingresa los candies que tiene y así  saber eficazmente cuantos candies necesitaba su Pokemon para la siguiente evolución, es por eso que al final de la página se encuentra el calculador propuesto. 
