import { arguments_assert } from "./arguments_assert.mjs";
export function g_profiles_balance_next_cases() {
  arguments_assert(arguments, 0);
  ("Small casts with some people already taken, and which person the balancing picker owes back for each one.");
  ("THE CASTS ARE MADE UP AND TINY rather than the real deal of two hundred and twenty-nine, because a case is only worth having if a reader can work the answer out by hand and disagree with the code. Handed the real cast, every expectation here would be a number copied out of a run, which agrees with whatever the code does including on the day it starts doing the wrong thing.");
  ("EVERY PROFILE IS WHOLE, all seven axes, because the picker scores all seven. A case holding gender alone would be scored against a target that also wants ages and marriages, and the axes it left out would drag every candidate by the same amount - which happens to leave the ordering right, and would go on being green after the picker stopped reading six of the seven.");
  ("THE FIRST CASE IS THE ONE THIS WAS BUILT FOR: everybody taken so far is a woman and the front of the cast holds another one, so a picker that walked the list in order would answer nought. The right answer is the man further down, and the two answers are different numbers - which is what makes the case able to fail.");
  ("THE SECOND CASE VARIES THE AXIS THAT IS SHORT rather than the one the first case varied, so a picker that had been quietly hard-wired to prefer men would pass the first and fail here. The cast is evenly split by gender and starved of anyone unmarried, and the person owed is the single man rather than the married one who is equally male.");
  ("THE THIRD CASE TAKES NOBODY FIRST. With nothing taken, every candidate is scored as a cast of one, and the answer has to be a real comparison of who a lone person leaves the spread nearest to - not the front of the list by default. It is the case that catches a picker that treats an empty start as a special one.");
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
      next: 2,
      why: "the one person taken is a woman and the very next in the list is another woman, so pool order would answer nought; the man is what the spread is short of",
    },
    {
      cast: [man_married, man_single],
      taken: [],
      next: 1,
      why: "nobody taken and both candidates are men, so gender cannot decide it; single is nearer its share of a cast of one than married is, and a picker reading only gender would tie and answer nought",
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
