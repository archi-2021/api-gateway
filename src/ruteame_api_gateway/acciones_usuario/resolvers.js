import { generalRequest, getRequest } from '../../utilities';
import { url, port} from './server';

const URL = `http://${url}:${port}`;
const alarm_url = "api/alarm"
const profile_url = "api/profile"
const user_url = "api/user"

const resolvers = {
	
	Query:{

		getTest:(_) => 
			generalRequest(`${URL}/${alarm_url}/test`, 'GET').then(data=>{
				console.log(data)
				return data
			}),

		getAllAlarms:(_) => 
			generalRequest(`${URL}/${alarm_url}`, 'GET'),
			
		
		getAlarm:(_, {id}) =>
			generalRequest(`${URL}/${alarm_url}/${id}`, 'GET').then(data=>{
				console.log(data)
				return data
			}),
		
		getAllProfiles:(_) => 
			generalRequest(`${URL}/${profile_url}`, 'GET'),
		
		getProfile:(_, {id}) =>
			generalRequest(`${URL}/${profile_url}/${id}`, 'GET'),
		
		getAllUsers:(_) => 
			generalRequest(`${URL}/${user_url}`, 'GET'),
		
		getUser:(_, {id}) =>
			generalRequest(`${URL}/${user_url}/${id}`, 'GET'),		
	},

	Mutation:{

		createAlarm: (_, { alarm }) =>
			generalRequest(`${URL}/${alarm_url}`, 'POST', alarm),
		updateAlarm: (_, { id, alarm }) =>
			generalRequest(`${URL}/${alarm_url}/${id}`, 'PUT', alarm),
		deleteAlarm: (_, { id }) =>
			generalRequest(`${URL}/${alarm_url}/${id}`, 'DELETE'),
		
		createProfile: (_, { profile }) =>
			generalRequest(`${URL}/${profile_url}`, 'POST', profile),
		updateProfile: (_, { id, profile }) =>
			generalRequest(`${URL}/${profile_url}/${id}`, 'PUT', profile),
		deleteProfile: (_, { id }) =>
			generalRequest(`${URL}/${profile_url}/${id}`, 'DELETE'),

		createUser: (_, { user }) =>
			generalRequest(`${URL}/${user_url}`, 'POST', user),
		updateUser: (_, { id, user }) =>
			generalRequest(`${URL}/${user_url}/${id}`, 'PUT', user),
		deleteUser: (_, { id }) =>
			generalRequest(`${URL}/${user_url}/${id}`, 'DELETE'),
	}
};

export default resolvers;