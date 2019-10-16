import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import User from './user/userType';
import Address from './address/addressType';
import userQueries from './user/userQueries';

const schema = new GraphQLSchema({
  types: [User, Product, Recipe, MealPlan, Address, Delivery],
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
