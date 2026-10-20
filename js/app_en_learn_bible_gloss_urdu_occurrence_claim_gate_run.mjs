import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { gloss_store_stored_is } from "./gloss_store_stored_is.mjs";
import { not } from "./not.mjs";
import { app_en_learn_bible_gloss_urdu_occurrence_claims_wrong_names } from "./app_en_learn_bible_gloss_urdu_occurrence_claims_wrong_names.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { app_en_learn_bible_gloss_urdu_occurrence_claims_tally } from "./app_en_learn_bible_gloss_urdu_occurrence_claims_tally.mjs";
import { property_get } from "./property_get.mjs";
import { less_than } from "./less_than.mjs";
import { assert_json } from "./assert_json.mjs";
export async function app_en_learn_bible_gloss_urdu_occurrence_claim_gate_run() {
  "Gate: no Urdu gloss explanation may tell a reader that one of its English words has come for a time the chapter's own words do not reach, counted either way round. Throws so the dispatcher seam exits nonzero.";
  "★ THIS IS THE SECOND THING AN EXPLANATION SAYS THAT A MACHINE CAN SETTLE, AND THE STORE SAYS IT FOUR THOUSAND TIMES. Almost every explanation opens by saying which time over its word has come. The chapter holding the answer is already open, so the sentence can be read against it; and a wrong number is worse than a clumsy sentence, because a reader counting along finds the chapter disagreeing with the book teaching them to count.";
  "★ WHETHER TWO SPELLINGS OF ONE WORD ARE ONE WORD IS NOT SETTLED HERE AND MUST NOT BE. The sweep counts each word both ways - every spelling apart, and all spellings of a word together - and a sentence agreeing with either is left alone. So this gate is silent on a chapter counted consistently by either rule, and red only on a number that no counting reaches. The cost is stated plainly: a chapter that counted some words one way and some the other passes, and catching that wants a different reading, one asking whether a single word's numbers climb by one under a single rule.";
  "THE FLOOR IS THE HALF THAT MATTERS. The sweep finds a claim by the words the store spells it with, so a chapter worded any other way is found nowhere and reports nothing wrong - which reads exactly like a chapter with nothing wrong in it. Holding the number of sentences read to what was read when this was written turns that silence red. It will fire on a deliberate rewording, and that is right: somebody then has to come here and say what the new wording is, or the check quietly stops being a check.";
  "A store that is not on the disk is passed over and said so, rather than counted as clean. The store lives on a drive that is not always mounted, and a sweep that read nothing and called it nought would turn one unmounted drive into a green gate for everybody.";
  arguments_assert(arguments, 0);
  let floor = 4167;
  let fn = app_en_learn_bible_gloss_urdu_generate;
  let stored = await gloss_store_stored_is(fn);
  if (not(stored)) {
    let skipped = {
      skipped: 1,
    };
    return skipped;
  }
  let offenders =
    await app_en_learn_bible_gloss_urdu_occurrence_claims_wrong_names();
  list_empty_is_assert_json(offenders, {
    hint: "these explanations say their word has come for a time the chapter does not reach, counted either way round - open the chapter at that word, count the word through that explanation, and write the number the chapter gives",
    offenders,
  });
  let tally = await app_en_learn_bible_gloss_urdu_occurrence_claims_tally();
  let counted = property_get(tally, "counted");
  let thin = less_than(counted, floor);
  let enough = not(thin);
  assert_json(enough, {
    hint: "fewer of these sentences can be read now than when this gate was written, so the reading may be looking for a wording the store has stopped using and reporting nothing wrong because it is finding nothing at all - teach the reading the new wording, or lower the floor here on purpose",
    counted,
    floor,
    tally,
  });
  return tally;
}
