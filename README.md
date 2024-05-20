## Module Federate - enfoque Multi Repo
En este proyecto se esta usando react 18.3.1 - node 16.17.0

## Pasos para crear los microfrontends

1. Crear proyecto
```console
npx create-mf-app
```
2. Exponer mf en el archivo webpack.conf
```javascript
exposes: {
        "./Prueba": "./src/components/Prueba.jsx"
      }
```

2. Consumir mf en el host en el archivo webpack.conf
```javascript
remotes: {
        prueba: "prueba@http://localhost:4001/remoteEntry.js"
      },
```
4. Importar en el archivo que se desea pintar
```javascript
import React from "react";
import Prueba from "mf_prueba/Prueba";

const AboutPage = () => {
  return (
      <Prueba/>
  )
};
export default AboutPage;
```
