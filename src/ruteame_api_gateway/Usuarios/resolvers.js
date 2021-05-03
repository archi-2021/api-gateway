import { generalRequest, getRequest } from '../../utilities';
import { url, port} from './server';

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

export default resolvers;