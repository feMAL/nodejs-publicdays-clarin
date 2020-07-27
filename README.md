# Feriados REST-API.

_Desarrollado en nodeJS_

## Funcionalidad

_El presente api brinda funcionalidades para el manejo de feriados_
_El API contiene un script para solicitar todos los feriados del presente año_

### End Points del API

 * GET  /feriado/:id  -> Obtener un feriado en base al id del objeto.
 * GET  /feriados     -> Obtener todos los feriados de la DB.
 * PUT  /feriado/:id  -> Editar un feriado.

### Ejecutar script de Carga

_El siguiente Script se encargará de obtener los objetos de la url_

* [http://nolaborables.com.ar](http://nolaborables.com.ar/api/v2/feriados/[año]?incluir=opcional)

```
npm run script
```

### Ejecutar server sobre un sistema de desarrollo

```
npm run dev
```

### Ejecutar server sobre un sistema productivo

#### Setear las variables de entorno requeridas para el end-point

 * PORT
 * NODE_ENV = 'production'

#### Setear las variables de entorno requeridas para la base de datos

 * DB_URL
 * DB_PORT
 * DB_NAME
 * DB_USER,
 * DB_PASS,

#### Comando de ejecucion.
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
