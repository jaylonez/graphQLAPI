const { GraphQLEnumType } = require('graphql');

const ACTIVITY_LEVEL_ENUM = {
  sedentary: 'Sedentary',
  light: 'Lightly Active',
  moderate: 'Moderately Active',
  heavy: 'Heavily Active',
  extreme: 'Extremely Active',
};
const UserActivityLevelEnum = new GraphQLEnumType({
  name: 'UserActivityLevelEnum',
  values: {
    sedentary: {
      value: ACTIVITY_LEVEL_ENUM.sedentary,
    },
    light: {
      value: ACTIVITY_LEVEL_ENUM.light,
    },
    moderate: {
      value: ACTIVITY_LEVEL_ENUM.moderate,
    },
    heavy: {
      value: ACTIVITY_LEVEL_ENUM.heavy,
    },
    extreme: {
      value: ACTIVITY_LEVEL_ENUM.extreme,
    },
  },
});

UserActivityLevelEnum.ALEnum = ACTIVITY_LEVEL_ENUM;

export default UserActivityLevelEnum;
