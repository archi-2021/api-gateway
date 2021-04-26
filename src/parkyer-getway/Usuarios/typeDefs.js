export const UsuariosTypeDef = `
type Users1 {
    id: Int!
    name: String!
    username: String!
    password: String!
    email: String!
}
input UserData {
    name: String!
    last_name: String!
    email: String!
    password: String!
    phone: Int!
    payment_method: Int!
    address: String!
}
`;


export const UsuariosQueries = `
    getUsuarios: [Users1]!
`;
export const UsuariosMutations = `
    createUser(user: UserData!): Users1!
`;