import { generalRequest, getRequest } from '../../utilities';
import { url, port} from './server';

const URL = `http://${url}:${port}`;
const ruta='routes';
const paraderos ='bus_stop';

const resolvers = {
	Query: {
		//CUSTOM ENDPONTS
		getIdRuta:(_,{ routeID })=> //endpoint para traer ruta
			generalRequest(`${URL}/${ruta}/${routeID}`, 'GET'),

		//EXAMPLE ENDPOINTS
		/*allCategories: (_) =>
			getRequest(URL, ''),
		categoryById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),*/
		getIdparadero:(_,{ routeID })=> //endpoint para traer ruta
			generalRequest(`${URL}/${paraderos}/${routeID}`, 'GET'),
		

		
	}
	
	
};

export default resolvers;