import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';
import Address from '../address/AddressType';
import { get } from 'lodash';

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    firstName: {
      type: GraphQLString,
    },
    lastName: {
      type: GraphQLString,
    },
    address: {
      type: Address,
      resolve: async (source, {}, { loaders }) => {
        const addressId = get(source, 'addressId');
        if (!addressId) {
          return null;
        }
        return loaders.addresses.load(source.addressId);
      },
    },
    preferences: {
      type: Address,
      resolve: async (source, {}, { loaders }) => {
        const preferenceId = get(source, 'preferenceId');
        if (!preferenceId) {
          return null;
        }
        return loaders.preferences.load(source.preferenceId);
      },
    },
    decimalDigits: {
      type: GraphQLInt,
    },
    rounding: {
      type: GraphQLInt,
    },
    namePlural: {
      type: GraphQLString,
    },
  }),
  isTypeOf: data => data && data.table === 'users',
});

export default UserType;
