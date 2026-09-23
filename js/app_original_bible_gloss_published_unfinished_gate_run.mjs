import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_published_unfinished } from "./gloss_chapters_published_unfinished.mjs";
import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { app_original_bible_gloss_passages } from "./app_original_bible_gloss_passages.mjs";
import { gloss_upload_namespace_original_bible } from "./gloss_upload_namespace_original_bible.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { gloss_chapters_offenders_assert } from "./gloss_chapters_offenders_assert.mjs";
export async function app_original_bible_gloss_published_unfinished_gate_run() {
  "Gate: no chapter of the Greek and Hebrew gloss is published while passages in it are still unexplained. Throws so the dispatcher seam exits nonzero.";
  "It is the third of three, one per gloss store, and it is the one that was green from the first run. That is the reason to write it rather than a reason to skip it: the fault had already happened twice in the two stores beside it, so the only thing this store had was luck, and luck is what a gate is for.";
  "It deliberately does not fail on a chapter merely being unfinished. EXO20 stood at four passages of twenty-three when this was written, and was correctly unpublished; material here is authored over weeks and a light over incompleteness would be red for months by design.";
  arguments_assert(arguments, 0);
  let walked = await gloss_chapters_published_unfinished(
    app_original_bible_gloss_generate,
    app_original_bible_gloss_passages,
    gloss_upload_namespace_original_bible,
  );
  let f_name = fn_name("app_original_bible_gloss_write_coverage");
  let f_name2 = fn_name("app_original_bible_gloss_chapter_upload_stored");
  let fault = text_combine_multiple([
    "are published with passages nobody has explained yet - read the verses each one is missing with ",
    f_name,
    ", write them, then carry the chapter up again with ",
    f_name2,
  ]);
  let r = gloss_chapters_offenders_assert(walked, "original_bible", fault);
  return r;
}
