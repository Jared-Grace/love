import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { gloss_store_stored_is } from "./gloss_store_stored_is.mjs";
import { not } from "./not.mjs";
import { app_en_learn_bible_gloss_urdu_verse_claims_wrong_names } from "./app_en_learn_bible_gloss_urdu_verse_claims_wrong_names.mjs";
import { app_en_learn_bible_gloss_urdu_verse_claims_wrong_baseline_path } from "./app_en_learn_bible_gloss_urdu_verse_claims_wrong_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { gloss_gate_told_chapters } from "./gloss_gate_told_chapters.mjs";
export async function app_en_learn_bible_gloss_urdu_verse_claims_wrong_gate_run() {
  "Gate: no Urdu gloss explanation authored from here on may name a verse of its own chapter that holds nothing built on the same English root, unless somebody has already read that sentence and banked it. Throws so the dispatcher seam exits nonzero.";
  "★ THIS IS THE ONE THING AN EXPLANATION SAYS THAT A MACHINE CAN SETTLE. Everything else in a gloss sentence is judgment - whether the meaning is right, whether the parts are named well, whether a ten year old will follow it. A sentence that says the word also stands in verse fifteen is checkable against verse fifteen, and the chapter holding the answer is already open. A wrong fact costs a reader more than a clumsy sentence does, so the one checkable claim is worth a gate on its own.";
  "★ THIS STORE SAYS آیت ۲۱ AND NEVER VERSE TWENTY-ONE, AND THE READING THAT RAN OVER IT KNEW ONLY THE ENGLISH SPELLING. So it found nothing at all and reported nothing wrong, which reads exactly like a store with nothing wrong in it. The store had said آیت twenty-four thousand four hundred and forty-nine times before anybody looked. That silence is what this gate was built out of, and it is worth remembering when the next store arrives.";
  "The record starts at two thousand eight hundred and ninety-seven and may only shrink, because a row here is a report rather than a verdict. This store names a verse far more often than the Cebuano one does, and its usual reason is to point at some other word standing there, or to say the word was absent from it - both right, both caught. So the standing rows are a reading queue, and the gate's work is to stop a new one joining it unseen.";
  "A store that is not on the disk is passed over and said so, rather than counted as clean. The store lives on a drive that is not always mounted, and every Claude in the repo runs this gate - a sweep that read nothing and called it nought would turn one unmounted drive into a record wiped for everybody.";
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
    await app_en_learn_bible_gloss_urdu_verse_claims_wrong_names();
  let path = app_en_learn_bible_gloss_urdu_verse_claims_wrong_baseline_path();
  let name_write = fn_name(
    "app_en_learn_bible_gloss_urdu_verse_claims_wrong_baseline_write",
  );
  let told = await baseline_names_gate_generic(
    offenders,
    path,
    "these explanations name a verse of their own chapter that holds no word built on the same English root - open the chapter at that word and read the sentence: mend it if it claims the word stands in the verse it names, and bank it deliberately if it only points at another word there or says the word was absent",
    name_write,
  );
  let r = await gloss_gate_told_chapters(fn, told);
  return r;
}
