import User from './UserType';
import { GraphQLList } from 'graphql';

const userQueries = {
  users: {
    description: 'Fetching the list of users in investor portal',
    type: new GraphQLList(User),
  },
};

export default userQueries;
