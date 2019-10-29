import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import Address from './address/addressType';
import User from './user/userType';
import Product from './product/productType';
import userQueries from './user/userQueries';

const schema = new GraphQLSchema({
  types: [User, Product, Address],
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      ...userQueries,
    }),
  }),
  // mutation: new GraphQLObjectType({
  //   name: 'Mutation',
  //   fields: () => ({
  //     ...companyMutations,
  //   }),
  // }),
});

export default schema;
