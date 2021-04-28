import { generalRequest, getRequest } from '../../utilities';
import { url, port} from './server';

const URL = `http://${url}:${port}`;
const ruta='routes';
const paraderos ='bus_stop';

const resolvers = {
	Query: {
		//CUSTOM ENDPONTS
		getIdRuta:(_, { route_id_ruta_zonal })=> //endpoint para traer ruta
			generalRequest(`${URL}/${ruta}/${route_id_ruta_zonal}`, 'GET'),

		//EXAMPLE ENDPOINTS
		/*allCategories: (_) =>
			getRequest(URL, ''),
		categoryById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),*/

		

		
	},
	
	
};

export default resolvers;