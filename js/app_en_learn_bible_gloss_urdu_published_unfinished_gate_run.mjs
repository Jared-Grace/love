import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_published_unfinished } from "./gloss_chapters_published_unfinished.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { app_en_learn_bible_gloss_urdu_passages } from "./app_en_learn_bible_gloss_urdu_passages.mjs";
import { app_en_learn_bible_gloss_urdu_generate_upload_namespace } from "./app_en_learn_bible_gloss_urdu_generate_upload_namespace.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { gloss_chapters_offenders_assert } from "./gloss_chapters_offenders_assert.mjs";
export async function app_en_learn_bible_gloss_urdu_published_unfinished_gate_run() {
  "Gate: no chapter of English words explained in Urdu is published while passages in it are still unexplained. Throws so the dispatcher seam exits nonzero.";
  "This app offers a reader exactly the chapters it has published, and it offers each one whole. A chapter carried up early is therefore a chapter the reader opens and reads until the explanations stop, with nothing anywhere saying they were never written - so the one person who can see the fault is the one person who cannot report it.";
  "It is the mirror of the unpublished gate beside it. That one catches work that was finished and never arrived; this one catches work that arrived before it was finished. Neither could see the other's fault, because each reads only one side of the same pair of lists.";
  "MEASURED: one chapter of two hundred and sixty sat published with seven of its fourteen passages unwritten while every other gate over this store was green, and it was found by running a report by hand for an unrelated reason.";
  "It stays green for the ordinary state of this material, and deliberately does not fail on a chapter merely being unfinished. Material here is authored over weeks, so a light over incompleteness would be red for months by design and would hold every app behind an authoring chore. Publishing is the decision that turns the same state into a reader's problem, and it is one command somebody chooses to run.";
  "Both commands that close it are named in the complaint rather than described - the one that says which verses are missing and the one that carries the mended chapter back up - because a gate is read by somebody who was doing something else and wants the next thing to type.";
  arguments_assert(arguments, 0);
  let walked = await gloss_chapters_published_unfinished(
    app_en_learn_bible_gloss_urdu_generate,
    app_en_learn_bible_gloss_urdu_passages,
    app_en_learn_bible_gloss_urdu_generate_upload_namespace,
  );
  let f_name = fn_name("app_en_learn_bible_gloss_urdu_write_coverage");
  let f_name2 = fn_name("app_en_learn_bible_gloss_urdu_chapter_upload_stored");
  let fault = text_combine_multiple([
    "are published with passages nobody has explained yet - read the verses each one is missing with ",
    f_name,
    ", write them, then carry the chapter up again with ",
    f_name2,
  ]);
  let r = gloss_chapters_offenders_assert(walked, "en_learn_bible", fault);
  return r;
}
