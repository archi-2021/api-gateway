export const accionesUsuarioTypeDef =  `
  type Alarm{
    _id: String
    idRoute: Int
    location: String
  }

  type Profile{
    _id: ID
    name: String
    email: String
    image: String
  }

  type UserInfo{
    _id: ID
    idUser: Int
    profile: String
    alarm: [String]
    favorites: [Int]
    default: [Int]
  }

  input AlarmInput{
    idRoute: Int!
    location: String!
  }

  input ProfileInput{
    name: String!
    email: String!
    image: String!
  }

  input UserInfoInput{
    idUser: Int!
    profile: String!
    alarm: [String]
    favorites: [Int]
    default: [Int]
  }
`;



export const accionesUsuarioQueries = `
  getTest: Alarm  
  getAllAlarms: [Alarm]
  getAlarm(id: String): Alarm
  getAllProfiles: [Profile]
  getProfile(profileId: String!): Profile
  getAllUsers: [UserInfo]
  getUser(id: String!): UserInfo
    
`;

export const accionesUsuarioMutations = `
  createAlarm(alarm: AlarmInput!): Alarm
  updateAlarm(id: String!, alarm: AlarmInput!): Alarm
  deleteAlarm(id: String!): Alarm
  createProfile(profile: ProfileInput!): Profile
  updateProfile(id: String!, profile: ProfileInput!): Profile
  deleteProfile(id: String!): Profile
  createUser(user: UserInfoInput!): UserInfo
  updateUser(id: String!, user: UserInfoInput!): UserInfo
  deleteUser(id: String!): UserInfo
`;
