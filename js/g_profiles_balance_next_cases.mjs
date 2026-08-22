import { arguments_assert } from "./arguments_assert.mjs";
export function g_profiles_balance_next_cases() {
  arguments_assert(arguments, 0);
  ("Small casts with some people already taken, and which person the balancing picker owes back for each one.");
  ("THE CASTS ARE MADE UP AND TINY rather than the real deal of two hundred and twenty-nine, because a case is only worth having if a reader can work the answer out by hand and disagree with the code. Handed the real cast, every expectation here would be a number copied out of a run, which agrees with whatever the code does including on the day it starts doing the wrong thing.");
  ("EVERY PROFILE IS WHOLE, all seven axes, because the picker scores all seven. A case holding gender alone would be scored against a target that also wants ages and marriages, and the axes it left out would drag every candidate by the same amount - which happens to leave the ordering right, and would go on being green after the picker stopped reading six of the seven.");
  ("THE FIRST CASE IS THE ONE THAT WAS GOT WRONG BY HAND, and it is kept because being surprising is what makes it worth holding. One married woman is taken and the choice is another woman or a man who matches her on age and marriage and both counts of children. Gender says take the man; the answer is the other woman, because four axes left sitting at a single value cost more than the one axis mended. Seven axes are weighed and gender is one of them, so a picker will not reach for a man merely because the people so far are women - a reader who expects it to has misread what this measures, and the expectation written here was that reader.");
  ("THE SECOND CASE IS WHERE POOL ORDER AND THE RIGHT ANSWER SEPARATE. Both candidates are men, so gender decides nothing, and the nearer of the two would win any tie; the further one is owed because he is the only person who splits marriage and sons and daughters at once. A picker that had quietly fallen back to walking the list answers the nearer one and fails here.");
  ("THE THIRD CASE TAKES NOBODY FIRST. With nothing taken, every candidate is scored as a cast of one, and the answer has to be a real comparison of who a lone person leaves the spread nearest to - not the front of the list by default. It is the case that catches a picker that treats an empty start as a special one. Scored alone, the best person is simply the one holding the commonest value on the most axes.");
  ("THE FOURTH CASE HAS EVERYBODY TAKEN and is owed nothing at all. A chapter written out to its end is the ordinary way of finishing, so the answer is nothing rather than a refusal.");
  let woman_married = {
    gender: "female",
    age: "young adult",
    marital_status: "married",
    sons: "one",
    daughters: "one",
    servitude: "free",
    government_role: "none",
  };
  let woman_married_older = {
    gender: "female",
    age: "older",
    marital_status: "married",
    sons: "multiple",
    daughters: "multiple",
    servitude: "free",
    government_role: "none",
  };
  let man_married = {
    gender: "male",
    age: "young adult",
    marital_status: "married",
    sons: "one",
    daughters: "one",
    servitude: "free",
    government_role: "none",
  };
  let man_single = {
    gender: "male",
    age: "young adult",
    marital_status: "single",
    sons: "none",
    daughters: "none",
    servitude: "free",
    government_role: "none",
  };
  let cases = [
    {
      cast: [woman_married_older, woman_married, man_married],
      taken: [1],
      next: 0,
      why: "the other woman is owed and not the man, because the man matches the woman already taken on age, sons and daughters as well as marriage - taking him would leave four axes each sitting at a single value, and mending gender alone does not pay for that",
    },
    {
      cast: [woman_married, man_married, man_single],
      taken: [0],
      next: 2,
      why: "both candidates are men, so gender cannot decide it and a picker reading gender alone would tie and take the nearer one; the single man is owed because the married woman already taken leaves marriage, sons and daughters each sitting at one value, and he is the only one who splits all three",
    },
    {
      cast: [woman_married, man_single],
      taken: [],
      next: 0,
      why: "with nothing taken the answer is still a comparison rather than the front of the list - the married woman is the one a cast of one is best represented by, women being the larger share and married the larger still",
    },
    {
      cast: [woman_married, man_single],
      taken: [0, 1],
      next: null,
      why: "everybody is taken, which is a chapter finished rather than a chapter broken",
    },
  ];
  return cases;
}
