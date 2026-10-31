import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { gloss_store_stored_is } from "./gloss_store_stored_is.mjs";
import { not } from "./not.mjs";
import { app_en_learn_bible_gloss_urdu_bible_quotes_absent_names } from "./app_en_learn_bible_gloss_urdu_bible_quotes_absent_names.mjs";
import { app_en_learn_bible_gloss_urdu_bible_quotes_absent_baseline_path } from "./app_en_learn_bible_gloss_urdu_bible_quotes_absent_baseline_path.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { fn_name } from "./fn_name.mjs";
import { gloss_gate_told_chapters } from "./gloss_gate_told_chapters.mjs";
export async function app_en_learn_bible_gloss_urdu_bible_quotes_absent_gate_run() {
  "Gate: no Urdu gloss explanation authored from here on may quote a chapter of the Bible by name and number with words the Urdu Bible on the page does not hold in that chapter, unless the record already holds it. Throws so the dispatcher seam exits nonzero.";
  "★ A QUOTE IS A CLAIM THE READER CAN CHECK, AND THE APP PUTS THE BIBLE TO CHECK IT RIGHT BESIDE IT. Measured on 2026-10-31, nine hundred and thirty-two of nine hundred and eighty quotes were not in the chapter they named, and nothing had said so - each was written fluently, in an older wording, from memory.";
  "The record starts at those nine hundred and thirty-two and may only shrink. Which wording the standing quotes should follow is a decision waiting on a person; the gate's work is to stop a new one joining them unseen.";
  "A store that is not on the disk is passed over and said so, rather than counted as clean.";
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
    await app_en_learn_bible_gloss_urdu_bible_quotes_absent_names();
  let path = app_en_learn_bible_gloss_urdu_bible_quotes_absent_baseline_path();
  let told = await baseline_names_gate_generic(
    offenders,
    path,
    "these explanations quote a chapter of the Bible with words the Urdu Bible on the page does not hold there - open that chapter and copy its words into the quote",
    fn_name("app_en_learn_bible_gloss_urdu_bible_quotes_absent_baseline_write"),
  );
  let r = await gloss_gate_told_chapters(fn, told);
  return r;
}
