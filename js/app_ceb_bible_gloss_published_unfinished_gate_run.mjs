import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_published_unfinished } from "./gloss_chapters_published_unfinished.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { app_ceb_bible_gloss_passages } from "./app_ceb_bible_gloss_passages.mjs";
import { gloss_upload_namespace_ceb_bible } from "./gloss_upload_namespace_ceb_bible.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { gloss_chapters_offenders_assert } from "./gloss_chapters_offenders_assert.mjs";
export async function app_ceb_bible_gloss_published_unfinished_gate_run() {
  "Gate: no chapter of the Cebuano gloss is published while passages in it are still unexplained. Throws so the dispatcher seam exits nonzero.";
  "It is the same light the Urdu store already carries, pointed at this store, and it is here because the fault it looks for was live here rather than hypothetical: SNG05 and PRO30 were both being offered to readers with one passage each still unwritten, while every other gate over these seven hundred and fifty chapters was green.";
  "A store keeps its own gate rather than one gate walking every store, because the complaint has to name this store's own two commands to be worth reading, and because a red light belongs to the app whose readers are affected rather than to all of them at once.";
  "It deliberately does not fail on a chapter merely being unfinished. MAT17 sat one passage short of done at the same moment and was never published, which is the ordinary and correct state of material authored over weeks; publishing is the separate decision that turns that state into something a reader meets.";
  arguments_assert(arguments, 0);
  let walked = await gloss_chapters_published_unfinished(
    app_ceb_bible_gloss_generate,
    app_ceb_bible_gloss_passages,
    gloss_upload_namespace_ceb_bible,
  );
  let f_name = fn_name("app_ceb_bible_gloss_write_coverage");
  let f_name2 = fn_name("app_ceb_bible_gloss_chapter_upload_stored");
  let fault = text_combine_multiple([
    "are published with passages nobody has explained yet - read the verses each one is missing with ",
    f_name,
    ", write them, then carry the chapter up again with ",
    f_name2,
  ]);
  let r = gloss_chapters_offenders_assert(walked, "ceb_bible", fault);
  return r;
}
