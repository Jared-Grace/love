import { red_proof_cases_claims_unmatched } from "../../../js/red_proof_cases_claims_unmatched.mjs";
import { red_proof_cases_claims_unmatched_cases } from "../../../js/red_proof_cases_claims_unmatched_cases.mjs";

("Wrong ways of catching a case that says it is the only one holding something down when it is holding nothing down, kept so the corpus can be asked again whether it still tells them apart.");

("This one is a check on the checks. Everything else proved this way is something the repository does to a person's work; this is the thing that reads the report those proofs print and says a sentence in it is false. Leaving it unproved would have been the whole point of the exercise ignored one level up - a reading nothing has ever refused, sitting in the middle of the machinery for refusing readings nothing has ever refused.");

("The words looked for are copied out here rather than fetched from the real list, because a wrong version drawing its words from the list it is meant to be wrong about would follow that list wherever it went, and a version that cannot disagree is not a version at all. The versions that drop words from the list therefore spell out what they keep.");

let phrases_all = [
  "nowhere else",
  "the only case",
  "only this case",
  "no other case",
];

function phrases_of(options) {
  if (options.word_only_alone) {
    return ["only"];
  }
  if (options.phrase_the_only) {
    return ["the only"];
  }
  if (options.phrase_nowhere_else_alone) {
    return ["nowhere else"];
  }
  if (options.phrase_the_only_case_alone) {
    return ["the only case"];
  }
  return phrases_all;
}

function claims_is(described, options) {
  let phrases = phrases_of(options);
  let said = options.not_lowered ? described : described.toLowerCase();
  let held = phrases.some(function phrase_held_is(phrase) {
    let inside = said.includes(phrase);
    return inside;
  });
  return held;
}

function marked_of(row, position, options) {
  if (options.rows_not_index) {
    return row;
  }
  if (options.position_not_index) {
    return position;
  }
  return row.index;
}

function gathered_into(unmatched, rows, options) {
  let position = 0;
  while (position < rows.length) {
    let row = rows[position];
    let held = options.all_caught
      ? true
      : options.none_caught
        ? false
        : claims_is(row.described, options);
    if (held) {
      unmatched.push(marked_of(row, position, options));
      if (options.first_match_per_list) {
        return unmatched;
      }
    }
    position = position + 1;
  }
  return unmatched;
}

function reader_of(options) {
  function answer(one) {
    let unmatched = [];
    let first = options.redundant_before_idle ? one.redundant : one.idle;
    let second = options.redundant_before_idle ? one.idle : one.redundant;
    if (!options.redundant_only) {
      gathered_into(unmatched, first, options);
    }
    if (!options.idle_only) {
      gathered_into(unmatched, second, options);
    }
    return unmatched;
  }
  return answer;
}

export const red_proof = {
  fn: red_proof_cases_claims_unmatched.name,
  cases: red_proof_cases_claims_unmatched_cases,
  expected: "unmatched",
  described: "name",
  wrong: {
    redundant_only: reader_of({ redundant_only: true }),
    idle_only: reader_of({ idle_only: true }),
    redundant_before_idle: reader_of({ redundant_before_idle: true }),
    not_lowered: reader_of({ not_lowered: true }),
    word_only_alone: reader_of({ word_only_alone: true }),
    phrase_the_only: reader_of({ phrase_the_only: true }),
    phrase_nowhere_else_alone: reader_of({ phrase_nowhere_else_alone: true }),
    phrase_the_only_case_alone: reader_of({ phrase_the_only_case_alone: true }),
    first_match_per_list: reader_of({ first_match_per_list: true }),
    rows_not_index: reader_of({ rows_not_index: true }),
    position_not_index: reader_of({ position_not_index: true }),
    all_caught: reader_of({ all_caught: true }),
    none_caught: reader_of({ none_caught: true }),
  },
  allowed: {},
};
