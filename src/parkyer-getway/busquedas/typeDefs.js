


  export const rutasTypeDef =  `
  type Properties{
        idoperador_ruta_zonal: String
        fecha_implementacion_ruta_zonal: String
        tipo_ruta_zonal: Int
        localidad_origen_ruta_zonal: Int
        delega_ruta_zonal: Int
        zona_origen_ruta_zonal: Int
        route_id_ruta_zonal: Int
        objectid: Int
        origen_ruta_zonal: String
        longitud_ruta_zonal: Float
        localidad_destino_ruta_zonal: Int
        destino_ruta_zonal: String
        denominacion_ruta_zonal: String
        tipo_servicio_ruta_zonal: Int
        zona_destino_ruta_zonal: Int
        globalid: String
        route_name_ruta_zonal: String
        codigo_definitivo_ruta_zonal: String
    
    }
  type propiedades {
    id: Int
    type: String  
    properties:Properties
    geometry:String
      
}
type Paradero
{
    direccion_paradero:String
    ruta_sae: Int
    ruta_comercial: [String]
    linea:Int 
    cenefa_paradero: String
    nombre_paradero: Int
    posy: Int
    posicion: Int 
    posx:Int
    nodo: Int
    geopoint: String
      
}



`;



export const rutasQueries = `
    getIdRuta(routeID: Int!): propiedades
    getIdparadero(routeID: Int!): [Paradero]
`;

