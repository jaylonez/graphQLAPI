import { GraphQLObjectType, GraphQLString } from 'graphql';
import GraphQLJSON from 'graphql-type-json';
import { get } from 'lodash';

const AddressType = new GraphQLObjectType({
  name: 'Address',
  fields: () => ({
    houseNumber: {
      type: GraphQLString,
    },
    street: {
      type: GraphQLString,
    },
    neighbourhood: {
      type: GraphQLString,
      description: 'Neighbourhood information',
    },
    postCode: {
      type: GraphQLString,
    },
    district: {
      type: GraphQLString,
    },
    city: {
      type: GraphQLString,
    },
    state: {
      type: GraphQLString,
      resolve: source => source.stateId,
    },
    country: {
      type: GraphQLString,
    },
    extraInfo: {
      type: GraphQLJSON,
      description: 'Additional info about the address',
      resolve: source => {
        const extraInfo = get(source, 'extraInfo');
        if (!extraInfo) {
          return null;
        }
        return extraInfo;
      },
    },
  }),
  isTypeOf: data => data.table === 'addresses',
  interfaces: [require('../common/nodeInterface').NodeInterface],
});

export default AddressType;
