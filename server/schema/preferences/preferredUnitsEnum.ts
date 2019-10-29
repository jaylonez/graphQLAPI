const { GraphQLEnumType } = require('graphql');

const PREFERRED_UNITS_ENUM = {
  metric: 'Metric',
  imperial: 'Imperial',
};
const PreferredUnitsEnum = new GraphQLEnumType({
  name: 'UserPreferredUnitsEnum',
  values: {
    metric: {
      value: PREFERRED_UNITS_ENUM.metric,
    },
    imperial: {
      value: PREFERRED_UNITS_ENUM.imperial,
    },
  },
});

PreferredUnitsEnum.PUEnum = PREFERRED_UNITS_ENUM;

export default PreferredUnitsEnum;
