import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { gloss_store_stored_is } from "./gloss_store_stored_is.mjs";
import { not } from "./not.mjs";
import { app_en_learn_bible_gloss_urdu_occurrence_claims_rule_mixed_names } from "./app_en_learn_bible_gloss_urdu_occurrence_claims_rule_mixed_names.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { list_size } from "./list_size.mjs";
export async function app_en_learn_bible_gloss_urdu_occurrence_claim_rule_gate_run() {
  "Gate: within one chapter of the Urdu-explained English store, one word's occurrence numbers must all be reachable by a single rule. Throws so the dispatcher seam exits nonzero.";
  "★ THE GATE BESIDE THIS ONE CANNOT SEE THIS FAULT, AND SAID SO WHEN IT WAS BUILT. It asks of each sentence on its own whether some rule reaches its number, and a chapter that counts a word with the spellings apart for a few verses and then folds them together answers yes every single time. Nine places in the store did exactly that, and every one of them was invisible to a check that looks at one sentence at a time. A rule is a promise to the next sentence, so it has to be checked over a run and not over a row.";
  "★ THIS STILL SETTLES NOTHING ABOUT WHICH RULE IS RIGHT. Whether And and and are one word or two is a question for a person, and both answers stay open here: all of one or all of the other passes. What fails is only the chapter contradicting itself, which no answer to that question would excuse.";
  "The ratchet is zero, because a row here is a proof and not a report. Nine were found and all nine were mended by reading the word's whole run and keeping the rule the chapter itself kept to for the rest of the chapter - seven in Genesis twenty-four, one each in twenty-one and twenty-two, thirty-five numbers rewritten in all. A record of blessed rows would be a record of numbers a student is still being taught wrongly, so there is deliberately no baseline file to add to.";
  "Nothing here guards against the reading going quiet, and nothing needs to: it reads the very same gathered claims as the gate beside it, and that gate holds a floor under how many of them can be read at all.";
  "A store that is not on the disk is passed over and said so, rather than counted as clean. The store lives on a drive that is not always mounted, and a sweep that read nothing and called it clean would turn one unmounted drive into a gate that passes for everybody.";
  "How many chapters were walked travels out beside the verdict, because finding none and reaching none are the same word otherwise.";
  arguments_assert(arguments, 0);
  let fn = app_en_learn_bible_gloss_urdu_generate;
  let stored = await gloss_store_stored_is(fn);
  if (not(stored)) {
    let skipped = {
      skipped: 1,
    };
    return skipped;
  }
  let offenders =
    await app_en_learn_bible_gloss_urdu_occurrence_claims_rule_mixed_names();
  list_empty_is_assert_json(offenders, {
    hint: "in each of these chapters one English word is counted two different ways - list that word's numbers through the whole chapter, see which rule the chapter keeps to for most of it, and mend the few sentences that leave it; the sentence named is where the counting changed, so the slip is behind it",
    offenders,
  });
  let chapter_codes = await gloss_chapters_stored(fn);
  let chapters = list_size(chapter_codes);
  let r = {
    chapters,
  };
  return r;
}
