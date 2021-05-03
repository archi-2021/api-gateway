import { generalRequest, getRequest } from '../../utilities';
import { url, port} from './server';
import UsuariosResolvers from './ruteame_api_gateway/Usuarios/resolvers';
import accionesUsuarioResolvers from './ruteame_api_gateway/acciones_usuario/resolvers';

const URL = `http://${url}:${port}`;
const alarm_url = "api/alarm"
const profile_url = "api/profile"
const user_url = "api/user"

const resolvers = {

	Mutation:{

		createUserComplete: (_, {user:{username,password,email,name}}) =>
			UsuariosResolvers.Mutation.crearUser(_,{user:{username, password}})
			.then(({id})=>{
				console.log(id)
				return accionesUsuarioResolvers.Mutation.createUser(_,{
					user:{ idUser:id,email, name  }
				})
			}).then((data)=>{
				console.log(data)
				return true
			}).catch(()=>false)
		
	}
};

export default resolvers;