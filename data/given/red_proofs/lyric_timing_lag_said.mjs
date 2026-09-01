import { lyric_timing_lag_said } from "../../../js/lyric_timing_lag_said.mjs";
import { lyric_timing_lag_said_cases } from "../../../js/lyric_timing_lag_said_cases.mjs";

("Thirteen wrong ways of telling somebody how their run of sounds went, kept so the corpus can be asked again whether it still tells them apart.");

("Two of the thirteen were written to answer a report rather than a suspicion. The gate says which cases are the only ones refusing anything, and five of the eight here were the only ones refusing nothing - which reads as five cases too many and is usually the opposite, a set of wrong versions too broad to tell the careful cases apart. Two of the five said in their own words what they were for, a line drawn one press further along and a rounding that keeps the nines, and no version here asked either question sharply enough to hear the answer. So the line at seven tenths and the rounding that cuts rather than goes to the nearest are written from what those two cases claim about themselves.");

("The wording is copied out here rather than borrowed from the real one, because a wrong version that fetched its sentences from the function it is meant to be wrong about would follow that function's wording wherever it went, and a version that cannot disagree is not a version at all.");

let ask_wording_before = "Only ";
let ask_wording_after =
  " were answered, so nothing has been written into the lag box. Would another go, somewhere quiet, be easier?";
let told_wording_before = "You press ";
let told_wording_middle = " seconds after a sound, from ";
let told_wording_after =
  ". That is now in the lag box. Timing a song runs a little quicker than this, because you can hear a line coming - so if the words still land late, take a little more off.";

function enough_of(heard, count, options) {
  if (options.missed_at_most_two) {
    let few = count - heard <= 2;
    return few;
  }
  if (options.heard_any) {
    let some = heard > 0;
    return some;
  }
  if (options.all_answered) {
    let all = heard === count;
    return all;
  }
  if (options.half_share) {
    let half = heard * 2 >= count;
    return half;
  }
  if (options.nine_tenths) {
    let nine = heard * 10 >= count * 9;
    return nine;
  }
  if (options.over_the_line_strict) {
    let over = heard * 4 > count * 3;
    return over;
  }
  if (options.line_at_seven_tenths) {
    let seven = heard * 10 >= count * 7;
    return seven;
  }
  let three_quarters = heard * 4 >= count * 3;
  return three_quarters;
}

function seconds_of(lag, options) {
  if (options.no_rounding) {
    return lag;
  }
  if (options.one_place) {
    let one = Math.round(lag * 10) / 10;
    return one;
  }
  if (options.rounding_cut_not_nearest) {
    let cut = Math.floor(lag * 100) / 100;
    return cut;
  }
  let two = Math.round(lag * 100) / 100;
  return two;
}

function reader_of(options) {
  function answer(one) {
    let measured = one.measured;
    let heard = measured.heard;
    let count = options.count_from_heard_plus_missed
      ? measured.heard + measured.missed
      : options.count_ten_assumed
        ? 10
        : one.count;
    let enough = enough_of(heard, count, options);
    let counted = heard + " of the " + count + " sounds";
    let ask = ask_wording_before + counted + ask_wording_after;
    let seconds = options.lag_worded_before_deciding
      ? measured.lag.toFixed(2)
      : enough
        ? seconds_of(measured.lag, options)
        : 0;
    let told =
      told_wording_before +
      seconds +
      told_wording_middle +
      counted +
      told_wording_after;
    let said = enough ? told : ask;
    return said;
  }
  return answer;
}

export const red_proof = {
  fn: lyric_timing_lag_said.name,
  cases: lyric_timing_lag_said_cases,
  expected: "said",
  described: "why",
  wrong: {
    missed_at_most_two: reader_of({ missed_at_most_two: true }),
    heard_any: reader_of({ heard_any: true }),
    all_answered: reader_of({ all_answered: true }),
    half_share: reader_of({ half_share: true }),
    nine_tenths: reader_of({ nine_tenths: true }),
    over_the_line_strict: reader_of({ over_the_line_strict: true }),
    line_at_seven_tenths: reader_of({ line_at_seven_tenths: true }),
    rounding_cut_not_nearest: reader_of({ rounding_cut_not_nearest: true }),
    no_rounding: reader_of({ no_rounding: true }),
    one_place: reader_of({ one_place: true }),
    count_ten_assumed: reader_of({ count_ten_assumed: true }),
    lag_worded_before_deciding: reader_of({
      lag_worded_before_deciding: true,
    }),
    count_from_heard_plus_missed: reader_of({
      count_from_heard_plus_missed: true,
    }),
  },
  allowed: {
    count_from_heard_plus_missed:
      "It works the length of the run out by adding the answered sounds to the missed ones instead of using the number it was handed, and those are the same number because everything that measures a run here reports on every sound it played. It stops being the same the moment a run can be cut off partway through, and the version would then quietly report the run as shorter than it was.",
  },
};
