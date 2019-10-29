const { GraphQLEnumType } = require('graphql');

const WANTS_TO_ENUM = {
  loseWeight: 'Lose weight',
  maintain: 'Maintain',
  buildMuscle: 'Build muscle',
};
const WantsToEnum = new GraphQLEnumType({
  name: 'UserActivityLevelEnum',
  values: {
    loseWeight: {
      value: WANTS_TO_ENUM.loseWeight,
    },
    maintain: {
      value: WANTS_TO_ENUM.maintain,
    },
    buildMuscle: {
      value: WANTS_TO_ENUM.buildMuscle,
    },
  },
});

WantsToEnum.WTEnum = WANTS_TO_ENUM;

export default WantsToEnum;
