import { generalRequest, getRequest } from '../../utilities';
import { url, port} from './server';

const URL = `http://${url}:${port}`;
const ruta='routes';
const paraderos ='bus_stop';

const resolvers = {
	Query: {
		//CUSTOM ENDPONTS
		getIdRuta:(_, { id })=> //endpoint para traer ruta
			generalRequest(`${URL}/${GET_USER}/${id}`, 'GET'),

		//EXAMPLE ENDPOINTS
		/*allCategories: (_) =>
			getRequest(URL, ''),
		categoryById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),*/
		
	},
	Mutation: {
		//CUSTOM ENDPONTS
		createUser:(_, {user})=>
			generalRequest(`${URL}/${Lista}`,'POST',user),//endpoint para crear usuario
	}
};

export default resolvers;