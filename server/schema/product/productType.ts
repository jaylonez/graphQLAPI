import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

const ProductType = new GraphQLObjectType({
  name: 'Product',
  fields: () => ({
    name: {
      type: GraphQLString,
    },
    amount: {
      type: GraphQLInt,
    },
    measure: {
      type: GraphQLString,
    },
  }),
  isTypeOf: data => data && data.table === 'users',
});

export default ProductType;
