import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_stored_is } from "./app_ceb_bible_gloss_stored_is.mjs";
import { not } from "./not.mjs";
import { app_ceb_bible_gloss_verse_claims_wrong_names } from "./app_ceb_bible_gloss_verse_claims_wrong_names.mjs";
import { app_ceb_bible_gloss_verse_claims_wrong_baseline_path } from "./app_ceb_bible_gloss_verse_claims_wrong_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { gloss_gate_told_chapters } from "./gloss_gate_told_chapters.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
export async function app_ceb_bible_gloss_verse_claims_wrong_gate_run() {
  "Gate: no Cebuano gloss explanation authored from here on may name a verse of its own chapter that holds nothing built on the same root, unless somebody has already read that sentence and banked it. Throws so the dispatcher seam exits nonzero.";
  "★ THIS IS THE ONE THING AN EXPLANATION SAYS THAT A MACHINE CAN SETTLE. Everything else in a gloss sentence is judgment - whether the meaning is right, whether the parts are named well, whether a reader will follow it. A sentence that says the word also stands in verse fifteen is checkable against verse fifteen, and the chapter holding the answer is already open. A wrong fact costs a reader more than a clumsy sentence does, so the one checkable claim is worth a gate on its own.";
  "The record starts at six and may only shrink, because a row here is a report rather than a verdict. An explanation may name a verse to say what happens there instead of to say the word stands there, and both kinds arrive looking identical. Fifty of the store's fifty-six claims do hold, so the six standing are a reading queue, and the gate's work is to stop a seventh joining it unseen.";
  "The check reaches three chapters of four hundred and forty-nine, because cross-referencing is rare in this store rather than because the check is narrow. That is worth knowing before trusting a green answer: it goes green over almost the whole store by finding nothing to say, and it earns its cost on the chapter that starts cross-referencing tomorrow.";
  "A store that is not on the disk is passed over and said so, rather than counted as clean. The store lives on a drive that is not always mounted, and every Claude in the repo runs this gate - a sweep that read nothing and called it nought would turn one unmounted drive into a record wiped for everybody.";
  "How many chapters were walked travels out beside the verdict, because finding none and reaching none are the same word otherwise.";
  arguments_assert(arguments, 0);
  let stored = await app_ceb_bible_gloss_stored_is();
  let unread = not(stored);
  if (unread) {
    let skipped = {
      skipped: 1,
    };
    return skipped;
  }
  let offenders = await app_ceb_bible_gloss_verse_claims_wrong_names();
  let path = app_ceb_bible_gloss_verse_claims_wrong_baseline_path();
  let name_write = fn_name(
    "app_ceb_bible_gloss_verse_claims_wrong_baseline_write",
  );
  let told = await baseline_names_gate_generic(
    offenders,
    path,
    "these explanations name a verse of their own chapter that holds no word built on the same root - open the chapter at that word and read the sentence: mend it if it claims the word stands in the verse it names, and bank it deliberately if it only says what happens there",
    name_write,
  );
  let r = await gloss_gate_told_chapters(app_ceb_bible_gloss_generate, told);
  return r;
}
