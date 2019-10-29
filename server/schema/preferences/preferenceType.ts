import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLFloat } from 'graphql';
import GraphQLJSON from 'graphql-type-json';
import ActivityLevelEnum from './activityLevelEnum';
import WantsToEnum from './wantsToEnum';
import PreferredUnitsEnum from './preferredUnitsEnum';
import SexEnum from './sexEnum';
import { get } from 'lodash';

const PreferenceType = new GraphQLObjectType({
  name: 'Preferences',
  fields: () => ({
    peopleInFamily: {
      type: GraphQLInt,
    },
    caloriesPerDay: {
      type: GraphQLString,
    },
    mealsPerDay: {
      type: GraphQLString,
    },
    wantsTo: {
      type: WantsToEnum,
    },
    preferredUnits: {
      type: PreferredUnitsEnum,
    },
    sex: {
      type: SexEnum,
    },
    heightInCm: {
      type: GraphQLInt,
    },
    weightInKg: {
      type: GraphQLFloat,
    },
    weightGoalInKg: {
      type: GraphQLFloat,
    },
    age: {
      type: GraphQLInt,
    },
    bodyFat: {
      type: GraphQLInt,
    },
    activityLevel: {
      type: ActivityLevelEnum,
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
});

export default PreferenceType;
