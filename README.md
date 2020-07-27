# Feriados REST-API.

_Desarrollado en JS._

## Funcionalidad

_El presente api brinda funcionalidades para el manejo de feriados_
_El API contiene un script para solicitar todos los feriados del presente año_

### End Points del API

 * GET  /feriado/:id  -> Obtener un feriado en base al id del objeto.
 * GET  /feriados     -> Obtener todos los feriados de la DB.
 * PUT  /feriado/:id  -> Editar un feriado.

### Ejecutar script de Carga

_El siguiente Script se encargará de obtener los objetos de la url_

* [FERIADOS](http://nolaborables.com.ar/api/v2/feriados/[año]?incluir=opcional)

```
npm run script
```

### Ejecutar server sobre un sistema de desarrollo

```
npm run dev
```

### Ejecutar server sobre un sistema productivo

```
npm run start
```

## Tecnologias Utilizadas

 * NodeJS
 * Express
 * Mongo

## Implementación
```
npm build
```