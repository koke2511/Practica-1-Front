# React + TypeScript + Vite
## COMANDOS PARA EJECUTAR EL PROGRAMA: 
  - node -v  
  - npm -v  
## Intalar Node.js  
  - curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash  
  - source ~/.bashrc  
## Clonar el repositorio  
  - git clone URL_DEL_REPOSITORIO  
  - cd nombre-del-proyecto  
## Crear archivo .env en la raiz del proyecto y añadir:  
  - VITE_API_URL=https://swapi.dev/api  
## Instalar dependencias:  
  - npm install  
## Ejecutar el servidor:  
  - npm run dev

## ERRORES  
  - ### Uso incorrecto de la estructura de la API  
      - Al principio asumí que la API devolvía directamente un array de personajes, pero en realidad devuelve un objeto con la propiedad results. Lo solucioné accediendo correctamente           al array dentro de esa propiedad.
  - ### Error: “character.map is not a function”  
      - Estaba guardando en el estado el objeto completo de la respuesta en lugar del array de personajes. Corregí el estado para almacenar únicamente el array y poder usar .map() sin           errores.  
  - ### Problema en el manejo del catch  
      -  Intenté acceder directamente a propiedades del error sin validarlas, lo que generaba problemas en TypeScript. Lo solucionémostrando un mensaje genérico al usuario.
  - ### Confusión entre APIs  
      - Me confundí entre swapi.info y swapi.dev, ya que ambas devuelven estructuras distintas. Decidí trabajar solo con swapi.dev   

