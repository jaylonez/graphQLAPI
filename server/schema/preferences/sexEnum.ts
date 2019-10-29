const { GraphQLEnumType } = require('graphql');

const SEX_ENUM = {
  male: 'Male',
  female: 'Female',
};
const SexEnum = new GraphQLEnumType({
  name: 'ActivityLevelEnum',
  values: {
    male: {
      value: SEX_ENUM.male,
    },
    female: {
      value: SEX_ENUM.female,
    },
  },
});

SexEnum.SEnum = SEX_ENUM;

export default SexEnum;
