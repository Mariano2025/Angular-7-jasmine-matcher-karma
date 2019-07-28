// @ts-ignore
import MatchersUtil = jasmine.MatchersUtil;
// @ts-ignore
import CustomMatcherFactories = jasmine.CustomMatcherFactories;
// @ts-ignore
import CustomEqualityTester = jasmine.CustomEqualityTester;
// @ts-ignore
import CustomMatcher = jasmine.CustomMatcher;
// @ts-ignore
import CustomMatcherResult = jasmine.CustomMatcherResult;
export const CustomMatchers: CustomMatcherFactories = {
  toBe: (): CustomMatcher => {
    return {
      compare: (actual: any, expected: any): CustomMatcherResult => {
        if (actual === expected) {
          return {
            pass: true,
            message: 'test correct'
          };
        } else {
          return {
            pass: false,
            message: `Se esperaba el valor ${expected} pero se recibio ${actual}`
          };
        }
      }
    };
  },
}
declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBe(expected: any, expectationFailOutput?: any): boolean;
    }
  }
}
