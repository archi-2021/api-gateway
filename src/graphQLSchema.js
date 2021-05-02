import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	profileMutations,
	profileQueries,
	profileTypeDef
} from './ruteame_api_gateway/profile/typeDefs';
//julio_______________
import {
	rutasQueries,
	rutasTypeDef
} from './ruteame_api_gateway/busquedas/typeDefs';
//informe
	import{
		informeQueries,
		informeTypeDef
	} from './ruteame_api_gateway/informe/typeDefs';
//____________________

import {
	quejasMutations,
	quejasQueries,
	quejasTypeDef
} from './ruteame_api_gateway/Quejas/typeDefs';
import {
	registerMutations,
	registerQueries,
	registerTypeDef
} from './ruteame_api_gateway/register/typeDefs';
import {
	vehicleMutations,
	vehicleQueries,
	vehicleTypeDef
} from './ruteame_api_gateway/vehicles/typeDefs';
import {
	contactoMutations,
	contactoQueries,
	contactoTypeDef
} from './ruteame_api_gateway/contacto/typeDefs';
import {
	admin2Mutations,
	admin2Queries,
	admin2TypeDef
} from './ruteame_api_gateway/administration_two/typeDefs';
import {
	UsuariosQueries,
	UsuariosTypeDef
} from './ruteame_api_gateway/Usuarios/typeDefs';

import categoryResolvers from './ruteame_api_gateway/profile/resolvers';
import QuejasResolvers from './ruteame_api_gateway/Quejas/resolvers';
import RegisterResolvers from './ruteame_api_gateway/register/resolvers';
import vehicleResolvers from './ruteame_api_gateway/vehicles/resolvers';
import contactoResolvers from './ruteame_api_gateway/contacto/resolvers';
import admin2Resolvers from './ruteame_api_gateway/administration_two/resolvers';
import UsuariosResolvers from './ruteame_api_gateway/Usuarios/resolvers';
import busquedasResolvers from './ruteame_api_gateway/busquedas/resolvers';
import informeResolvers from './ruteame_api_gateway/informe/resolvers';
// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		profileTypeDef,
		quejasTypeDef,
		registerTypeDef,
		vehicleTypeDef,
		contactoTypeDef,
		admin2TypeDef,
		UsuariosTypeDef,
		rutasTypeDef,
		informeTypeDef
	],
	[
		profileQueries,
		registerQueries,
		quejasQueries,
		vehicleQueries,
		contactoQueries,
		admin2Queries,
		UsuariosQueries,
		rutasQueries,
		informeQueries
	],
	[
		profileMutations,
		quejasMutations,
		registerMutations,
		vehicleMutations,
		contactoMutations,
		admin2Mutations
	]
);


// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		categoryResolvers,
		QuejasResolvers,
		RegisterResolvers,
		vehicleResolvers,
		contactoResolvers,
		admin2Resolvers,
		UsuariosResolvers,
		busquedasResolvers,
		informeResolvers
	)
});
