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
		
		getProfile:(_, {profileId}) =>
			generalRequest(`${URL}/${profile_url}/${profileId}`, 'GET'),
		
		getAllUsers:(_) => 
			generalRequest(`${URL}/${user_url}`, 'GET'),
		
		getUser:(_, {userId}) =>
			generalRequest(`${URL}/${user_url}/${userId}`, 'GET'),		
	},

	Mutation:{

		createAlarm: (_, { alarm }) =>
			generalRequest(`${URL}/${alarm_url}`, 'POST', alarm),
		updateAlarm: (_, { alarmId, alarm }) =>
			generalRequest(`${URL}/${alarm_url}/${alarmId}`, 'PUT', alarm),
		deleteAlarm: (_, { alarmId }) =>
			generalRequest(`${URL}/${alarm_url}/${alarmId}`, 'DELETE'),
		
		createProfile: (_, { profile }) =>
			generalRequest(`${URL}/${profile_url}`, 'POST', profile),
		updateProfile: (_, { profileId, profile }) =>
			generalRequest(`${URL}/${profile_url}/${profileId}`, 'PUT', profile),
		deleteProfile: (_, { profileId }) =>
			generalRequest(`${URL}/${profile_url}/${profileId}`, 'DELETE'),

		createUser: (_, { user }) =>
			generalRequest(`${URL}/${user_url}`, 'POST', user),
		updateUser: (_, { userId, user }) =>
			generalRequest(`${URL}/${user_url}/${userId}`, 'PUT', user),
		deleteUser: (_, { userId }) =>
			generalRequest(`${URL}/${user_url}/${userId}`, 'DELETE'),
	}
};

export default resolvers;