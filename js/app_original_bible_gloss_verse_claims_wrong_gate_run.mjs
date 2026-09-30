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
  "Report, asked for by name rather than run with the others: which original-language gloss explanations name a verse of their own chapter that carries no word with the same Strong's number, beyond the ones somebody has already read and banked. Throws so the dispatcher seam exits nonzero.";
  "★ THIS IS THE ONE THING AN EXPLANATION SAYS THAT A MACHINE CAN SETTLE. Everything else in a gloss sentence is judgment - whether the meaning is right, whether the parsing is explained well, whether a ten year old will follow it. A sentence that says the word also stands in verse fifteen is checkable against verse fifteen, and the chapter holding the answer is already open. A wrong fact costs a reader more than a clumsy sentence does, so the one checkable claim is worth a gate on its own.";
  "★ THE SAME CHECK WAS MISSING HERE TWICE OVER: ONCE BECAUSE NOBODY HAD BUILT IT FOR THIS STORE, AND ONCE BECAUSE THE OBVIOUS WAY TO BUILD IT WOULD HAVE BEEN USELESS. Asking whether the spelling in the explanation stands again in the verse it names fails on an inflected language almost every time it is asked - five claims in six came back unheld, which is a queue nobody would ever read. The Strong's number carried on every interlinear word is what the endings vary around, so the question is asked on that instead, and the same claims come back about two in five.";
  "The record starts at what the store held when it was seeded and may only shrink, because a row here is a report rather than a verdict. The store's usual reason for naming a verse is to point at some other word standing there, or to say the word was absent from it - both right, both caught. So the standing rows are a reading queue, and the gate's work is to stop a new one joining it unseen.";
  "★ THIS IS NO LONGER ONE OF THE GATES THE REPO-WIDE CHECK RUNS. It was taken out of that list on 2026-09-28, by the human, on the reading below; it stays here and stays runnable by name, as a report to be asked for rather than a thing that stops a build.";
  "What it was measured at. Three hundred and sixty-seven rows standing and growing with every chapter a peer writes. Three hundred and eighty-one of them read by hand across two sittings - the hundred and fifty-two of 2026-09-25 and the two hundred and twenty-nine Deuteronomy and Joshua added - and two faults found. About one row in two hundred, and the other hundred and ninety-nine are this store's ordinary way of writing: an essay about a verse that names its neighbours for literary reasons and quotes no word at all, so the reading falls back to whichever word the entry happens to be about and asks a question the sentence never raised.";
  "And the rows are not merely noise, which is what settled it. Joshua eleven, verses sixteen and seventeen, on the word for a valley: the explanation says the same word stood in verse eight, in the name of the valley they chased the northern army up. Verse eight reads as far as the valley of Mizpeh, and the word is there. The sentence is true and this reading called it wrong. A queue nobody reads is a waste; a queue that accuses correct sentences will, when somebody does read it, get a correct sentence mended into a wrong one.";
  "Where the fault was, and that it is mended. The two spellings differ by the one letter meaning in written onto the front, and the dictionary numbers were met through a table keyed by spelling, in which one spelling answering to two numbers kept the last number it was given. On 2026-09-28 that table was changed to keep every number a spelling was ever given instead of only the last, so a prefixed form now meets its bare form. Re-measured the same day, the Joshua eleven row above is gone from the report, and no row from those two verses is left in it.";
  "So one of the two reasons for taking it out of the list has been answered and the other has not, which is why it stays a report rather than going back in. Accusing correct sentences was the sharp harm and it is fixed. The hit rate has not moved and was never going to, because it never came from the prefix fault - it comes from this store writing essays that name a neighbouring verse without quoting any word at all, and no reading of the dictionary numbers can tell a sentence that made no claim apart from a sentence that made a wrong one. Re-measured on 2026-09-28 the report stands at three hundred and fifty-five rows. Putting it back in the list means first finding a way to see the silence.";
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
