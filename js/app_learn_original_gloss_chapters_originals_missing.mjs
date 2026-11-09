import { equal } from "./equal.mjs";
import { app_learn_original_gloss_generate } from "./app_learn_original_gloss_generate.mjs";
import { gloss_chapter_read } from "./gloss_chapter_read.mjs";
import { gloss_passages_originals_missing } from "./gloss_passages_originals_missing.mjs";
import { gloss_chapters_offenders_generic } from "./gloss_chapters_offenders_generic.mjs";
export async function app_learn_original_gloss_chapters_originals_missing() {
  "Every chapter of the Hebrew and Greek gloss holding a verse whose original-language text is missing, with the verses named.";
  "Asked of the disk alone. It exists because a chapter-wide word check stopped with a null text and named no chapter, so the hole could not be found by running the check.";
  let fn = app_learn_original_gloss_generate;
  async function chapter_read(chapter_code) {
    let chapter = await gloss_chapter_read(chapter_code, fn);
    if (equal(chapter, null)) {
      let r2 = [];
      return r2;
    }
    let found = gloss_passages_originals_missing(chapter.passages);
    return found;
  }
  let r = await gloss_chapters_offenders_generic(fn, chapter_read);
  return r;
}
