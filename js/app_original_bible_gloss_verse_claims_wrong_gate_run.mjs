import { arguments_assert } from "./arguments_assert.mjs";
import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { gloss_store_stored_is } from "./gloss_store_stored_is.mjs";
import { not } from "./not.mjs";
import { app_original_bible_gloss_verse_claims_wrong_names } from "./app_original_bible_gloss_verse_claims_wrong_names.mjs";
import { app_original_bible_gloss_verse_claims_wrong_baseline_path } from "./app_original_bible_gloss_verse_claims_wrong_baseline_path.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { fn_name } from "./fn_name.mjs";
import { gloss_gate_told_chapters } from "./gloss_gate_told_chapters.mjs";
export async function app_original_bible_gloss_verse_claims_wrong_gate_run() {
  "Gate: no original-language gloss explanation authored from here on may name a verse of its own chapter that carries no word with the same Strong's number, unless somebody has already read that sentence and banked it. Throws so the dispatcher seam exits nonzero.";
  "★ THIS IS THE ONE THING AN EXPLANATION SAYS THAT A MACHINE CAN SETTLE. Everything else in a gloss sentence is judgment - whether the meaning is right, whether the parsing is explained well, whether a ten year old will follow it. A sentence that says the word also stands in verse fifteen is checkable against verse fifteen, and the chapter holding the answer is already open. A wrong fact costs a reader more than a clumsy sentence does, so the one checkable claim is worth a gate on its own.";
  "★ THE SAME CHECK WAS MISSING HERE TWICE OVER: ONCE BECAUSE NOBODY HAD BUILT IT FOR THIS STORE, AND ONCE BECAUSE THE OBVIOUS WAY TO BUILD IT WOULD HAVE BEEN USELESS. Asking whether the spelling in the explanation stands again in the verse it names fails on an inflected language almost every time it is asked - five claims in six came back unheld, which is a queue nobody would ever read. The Strong's number carried on every interlinear word is what the endings vary around, so the question is asked on that instead, and the same claims come back about two in five.";
  "The record starts at what the store held when it was seeded and may only shrink, because a row here is a report rather than a verdict. The store's usual reason for naming a verse is to point at some other word standing there, or to say the word was absent from it - both right, both caught. So the standing rows are a reading queue, and the gate's work is to stop a new one joining it unseen.";
  "A store that is not on the disk is passed over and said so, rather than counted as clean. The store lives on a drive that is not always mounted, and every Claude in the repo runs this gate - a sweep that read nothing and called it nought would turn one unmounted drive into a record wiped for everybody.";
  "How many chapters were walked travels out beside the verdict, because finding none and reaching none are the same word otherwise.";
  arguments_assert(arguments, 0);
  let fn = app_original_bible_gloss_generate;
  let stored = await gloss_store_stored_is(fn);
  if (not(stored)) {
    let skipped = {
      skipped: 1,
    };
    return skipped;
  }
  let offenders = await app_original_bible_gloss_verse_claims_wrong_names();
  let path = app_original_bible_gloss_verse_claims_wrong_baseline_path();
  let told = await baseline_names_gate_generic(
    offenders,
    path,
    "these explanations name a verse of their own chapter that carries no word with the same Strong's number - open the chapter at that word and read the sentence: mend it if it claims the word stands in the verse it names, and bank it deliberately if it only points at another word there or says the word was absent",
    fn_name("app_original_bible_gloss_verse_claims_wrong_baseline_write"),
  );
  let r = await gloss_gate_told_chapters(fn, told);
  return r;
}
