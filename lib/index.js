'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Koa = _interopDefault(require('koa'));
var KoaRouter = _interopDefault(require('koa-router'));
var koaLogger = _interopDefault(require('koa-logger'));
var koaBody = _interopDefault(require('koa-bodyparser'));
var koaCors = _interopDefault(require('@koa/cors'));
var apolloServerKoa = require('apollo-server-koa');
var merge = _interopDefault(require('lodash.merge'));
var GraphQLJSON = _interopDefault(require('graphql-type-json'));
var graphqlTools = require('graphql-tools');
var request = _interopDefault(require('request-promise-native'));
var graphql = require('graphql');

/**
 * Creates a request following the given parameters
 * @param {string} url
 * @param {string} method
 * @param {object} [body]
 * @param {boolean} [fullResponse]
 * @return {Promise.<*>} - promise with the error or the response object
 */
async function generalRequest(url, method, body, fullResponse) {
	const parameters = {
		method,
		uri: encodeURI(url),
		body,
		json: true,
		resolveWithFullResponse: fullResponse
	};
	if (process.env.SHOW_URLS) {
		// eslint-disable-next-line
		console.log(url);
	}

	try {
		return await request(parameters);
	} catch (err) {
		return err;
	}
}

/**
 * Adds parameters to a given route
 * @param {string} url
 * @param {object} parameters
 * @return {string} - url with the added parameters
 */


/**
 * Generates a GET request with a list of query params
 * @param {string} url
 * @param {string} path
 * @param {object} parameters - key values to add to the url path
 * @return {Promise.<*>}
 */


/**
 * Merge the schemas in order to avoid conflicts
 * @param {Array<string>} typeDefs
 * @param {Array<string>} queries
 * @param {Array<string>} mutations
 * @return {string}
 */
function mergeSchemas(typeDefs, queries, mutations) {
	return `${typeDefs.join('\n')}
    type Query { ${queries.join('\n')} }
    type Mutation { ${mutations.join('\n')} }`;
}

function formatErr(error) {
	const data = graphql.formatError(error);
	const { originalError } = error;
	if (originalError && originalError.error) {
		const { path } = data;
		const { error: { id: message, code, description } } = originalError;
		return { message, code, description, path };
	}
	return data;
}

const rutasTypeDef =  `
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
  type rutapropiedades {
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



const rutasQueries = `
    getIdRuta(routeID: Int!): rutapropiedades
    getIdparadero(routeID: Int!): [Paradero]
`;

const informeTypeDef =  `
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



const informeQueries = `
  getinfoById(id: Int!): informe
    
`;

const accionesUsuarioTypeDef =  `
  type Alarm{
    _id: String
    idRoute: Int
    location: String
  }

  type Profile{
    _id: ID
    name: String
    email: String
    image: String
  }

  type UserInfo{
    _id: ID
    idUser: Int
    profile: String
    alarm: [String]
    favorites: [Int]
    default: [Int]
  }

  input AlarmInput{
    idRoute: Int!
    location: String!
  }

  input ProfileInput{
    name: String!
    email: String!
    image: String!
  }

  input UserInfoInput{
    idUser: Int!
    profile: String!
    alarm: [String]
    favorites: [Int]
    default: [Int]
  }
`;



const accionesUsuarioQueries = `
  getTest: Alarm  
  getAllAlarms: [Alarm]
  getAlarm(id: String): Alarm
  getAllProfiles: [Profile]
  getProfile(profileId: String!): Profile
  getAllUsers: [UserInfo]
  getUser(id: String!): UserInfo
    
`;

const accionesUsuarioMutations = `
  createAlarm(alarm: AlarmInput!): Alarm
  updateAlarm(id: String!, alarm: AlarmInput!): Alarm
  deleteAlarm(id: String!): Alarm
  createProfile(profile: ProfileInput!): Profile
  updateProfile(id: String!, profile: ProfileInput!): Profile
  deleteProfile(id: String!): Profile
  createUser(user: UserInfoInput!): UserInfo
  updateUser(id: String!, user: UserInfoInput!): UserInfo
  deleteUser(id: String!): UserInfo
`;

const UsuariosTypeDef = `
type Users1 {
    id: Int!
    username: String!
    password: String!
}
input UserDataCreate {
    username: String!
    password: String!
}
type Create {
    ID: Int!
    message: String!
}
input UserDataUpdate {
    username: String!
}
type UpdateMessage {
    message: String!
}
input UserDataLogin {
    username: String!
    password: String!
}
type LoginMessage {
    token: String
    message: String!
}
`;


const UsuariosQueries = `
    getUsuarios: [Users1]!
    getUsuario(id: Int!): Users1!
`;
const UsuariosMutations = `
    crearUser(user: UserDataCreate!): Create
    actualizarUser(id: Int!, user: UserDataUpdate!): UpdateMessage!
    loginUser(user: UserDataLogin!): LoginMessage!
`;

const url = '44.192.14.52';
const port = '8080';

const URL = `http://${url}:${port}`;
const Lista='users';
const auth='auth';
const Login='login';

const resolvers = {
	Query: {
		//CUSTOM ENDPONTS
		getUsuarios:(_)=> //endpoint para traer registros
			generalRequest(`${URL}/${Lista}`, 'GET'),
		getUsuario:(_, { id })=> //endpoint para traer usuario
			generalRequest(`${URL}/${Lista}/${id}`, 'GET'),
	},
	Mutation: {
		//CUSTOM ENDPONTS
		crearUser:(_, {user})=>
			generalRequest(`${URL}/${Lista}`,'POST',user),//endpoint para crear usuario
		actualizarUser:(_,{id, user})=>
				generalRequest(`${URL}/${Lista}/${id}`, 'PUT', user), //endpoint para editar usuario
		loginUser:(_,{user})=>
			generalRequest(`${URL}/${auth}/${Login}`, 'POST', user), //endpoint para editar usuario

	}
};

const url$1 = '54.91.84.123';
const port$1 = '4040';

const URL$1 = `http://${url$1}:${port$1}`;
const ruta='routes';
const paraderos ='bus_stop';

const resolvers$1 = {
	Query: {
		//CUSTOM ENDPONTS
		getIdRuta:(_,{ routeID })=> //endpoint para traer ruta
			generalRequest(`${URL$1}/${ruta}/${routeID}`, 'GET'),

		//EXAMPLE ENDPOINTS
		/*allCategories: (_) =>
			getRequest(URL, ''),
		categoryById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),*/
		getIdparadero:(_,{ routeID })=> //endpoint para traer ruta
		generalRequest(`${URL$1}/${paraderos}/${routeID}`, 'GET'),
		

		
	}
	
	
};

const url$2 = '54.91.84.123';
const port$2 = '4042';

const URL$2 = `http://${url$2}:${port$2}`;
const informeRest = "inf/infrp";

const resolvers$2 = {
	Query: {
		//CUSTOM ENDPONTS
		getinfoById:(_,{ id })=> //endpoint para traer ruta
			generalRequest(`${URL$2}/${informeRest}/${id}`, 'GET'),

		//EXAMPLE ENDPOINTS
		/*allCategories: (_) =>
			getRequest(URL, ''),
		categoryById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),*/
		
		

		
	}
	
	
};

const url$3 = '35.168.110.100';
const port$3 = '3000';

const URL$3 = `http://${url$3}:${port$3}`;
const alarm_url = "api/alarm";
const profile_url = "api/profile";
const user_url = "api/user";

const resolvers$3 = {
	
	Query:{

		getTest:(_) => 
			generalRequest(`${URL$3}/${alarm_url}/test`, 'GET').then(data=>{
				console.log(data);
				return data
			}),

		getAllAlarms:(_) => 
			generalRequest(`${URL$3}/${alarm_url}`, 'GET'),
			
		
		getAlarm:(_, {id}) =>
			generalRequest(`${URL$3}/${alarm_url}/${id}`, 'GET').then(data=>{
				console.log(data);
				return data
			}),
		
		getAllProfiles:(_) => 
			generalRequest(`${URL$3}/${profile_url}`, 'GET'),
		
		getProfile:(_, {profileId}) =>
			generalRequest(`${URL$3}/${profile_url}/${profileId}`, 'GET'),
		
		getAllUsers:(_) => 
			generalRequest(`${URL$3}/${user_url}`, 'GET'),
		
		getUser:(_, {userId}) =>
			generalRequest(`${URL$3}/${user_url}/${userId}`, 'GET'),		
	},

	Mutation:{

		createAlarm: (_, { alarm }) =>
			generalRequest(`${URL$3}/${alarm_url}`, 'POST', alarm),
		updateAlarm: (_, { alarmId, alarm }) =>
			generalRequest(`${URL$3}/${alarm_url}/${alarmId}`, 'PUT', alarm),
		deleteAlarm: (_, { alarmId }) =>
			generalRequest(`${URL$3}/${alarm_url}/${alarmId}`, 'DELETE'),
		
		createProfile: (_, { profile }) =>
			generalRequest(`${URL$3}/${profile_url}`, 'POST', profile),
		updateProfile: (_, { profileId, profile }) =>
			generalRequest(`${URL$3}/${profile_url}/${profileId}`, 'PUT', profile),
		deleteProfile: (_, { profileId }) =>
			generalRequest(`${URL$3}/${profile_url}/${profileId}`, 'DELETE'),

		createUser: (_, { user }) =>
			generalRequest(`${URL$3}/${user_url}`, 'POST', user),
		updateUser: (_, { userId, user }) =>
			generalRequest(`${URL$3}/${user_url}/${userId}`, 'PUT', user),
		deleteUser: (_, { userId }) =>
			generalRequest(`${URL$3}/${user_url}/${userId}`, 'DELETE'),
	}
};

//Juan Guillermo (busqueda)_______________
//Julio (informe)_______________
	//Diana (acciones usuario)_______________
//Juan Camilo (usuario)____________________
// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		UsuariosTypeDef,
		rutasTypeDef,
		informeTypeDef,
		accionesUsuarioTypeDef
	],
	[
		UsuariosQueries,
		rutasQueries,
		informeQueries,
		accionesUsuarioQueries
	],
	[
		UsuariosMutations,
		accionesUsuarioMutations
	]
);


// Generate the schema object from your types definition.
var graphQLSchema = graphqlTools.makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		resolvers,
		resolvers$1,
		resolvers$2,
		resolvers$3
	)
});

const app = new Koa();
const router = new KoaRouter();
const PORT = process.env.PORT || 5000;

app.use(koaLogger());
app.use(koaCors());

// read token from header
app.use(async (ctx, next) => {
	if (ctx.header.authorization) {
		const token = ctx.header.authorization.match(/Bearer ([A-Za-z0-9]+)/);
		if (token && token[1]) {
			ctx.state.token = token[1];
		}
	}
	await next();
});

// GraphQL
const graphql$1 = apolloServerKoa.graphqlKoa((ctx) => ({
	schema: graphQLSchema,
	context: { token: ctx.state.token },
	formatError: formatErr
}));
router.post('/graphql', koaBody(), graphql$1);
router.get('/graphql', graphql$1);

// test route
router.get('/graphiql', apolloServerKoa.graphiqlKoa({ endpointURL: '/graphql' }));

app.use(router.routes());
app.use(router.allowedMethods());
// eslint-disable-next-line
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
