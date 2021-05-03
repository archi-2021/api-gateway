import { generalRequest, getRequest } from '../../utilities';
import { url, port} from './server';

const URL = `http://${url}:${port}`;
const informeRest = "inf/infrp"

const resolvers = {
	Query: {
		//CUSTOM ENDPONTS
		getinfoById:(_,{ id })=> //endpoint para traer ruta
			generalRequest(`${URL}/${informeRest}/${id}`, 'GET'),

		//EXAMPLE ENDPOINTS
		/*allCategories: (_) =>
			getRequest(URL, ''),
		categoryById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),*/
		
		

		
	}
	
	
};

export default resolvers;