export const orquestadorTypeDef =  `

  input UserCompleteInput{
    name: String
    email: String
    password: String
    username: String
  }
`;


export const orquestadorMutations = `
  createUserComplete(user: UserCompleteInput!): Boolean
`;
