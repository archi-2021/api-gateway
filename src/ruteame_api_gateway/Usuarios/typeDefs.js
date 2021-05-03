export const UsuariosTypeDef = `
type Users1 {
    id: Int!
    username: String!
    password: String!
}
input UserDataCreate {
    username: String!
    password: String!
}
type Create {
    ID: Int!
    message: String!
}
input UserDataUpdate {
    username: String!
}
type UpdateMessage {
    message: String!
}
`;


export const UsuariosQueries = `
    getUsuarios: [Users1]!
    getUsuario(id: Int!): Users1!
`;
export const UsuariosMutations = `
    crearUser(user: UserDataCreate!): Create
    actualizarUser(id: Int!, user: UserDataUpdate!): UpdateMessage!
`;