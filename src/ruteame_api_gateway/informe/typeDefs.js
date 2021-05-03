


  export const informeTypeDef =  `
  type informe{
  idRuta: Int
	localidadOrigen: String
	localidadDestino: String
	nombreRuta: String
	cantidadBuses: Int
  barrioOrigen_final: String
  velocidadPromedio: Int
  paraderos:[String]
  fecha : String
  }



`;



export const informeQueries = `
  getinfoById(id: Int!): informe
    
`;

