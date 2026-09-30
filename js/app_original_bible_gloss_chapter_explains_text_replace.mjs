import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { gloss_chapter_explains_text_replace } from "./gloss_chapter_explains_text_replace.mjs";
export async function app_original_bible_gloss_chapter_explains_text_replace(
  chapter_code,
  before,
  after,
) {
  "One chapter of the original-language Bible gloss with a settled run of wording swapped for another wherever a word explanation says it, and the count of explanations that changed.";
  "The twin of the same door onto the Urdu store, and it exists for the same reason: the reading underneath takes the store as a function, and a command line hands every argument over as a run of letters, so the store has to be named in the code rather than in an argument. What the two do not share is the one line naming their store, and joining them would put a function's name back into an argument, which is the shape a command may not have.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN07, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "$plain before";
  "$plain after";
  "the two are runs of letters, the wording to look for and the wording to leave in its place. They are prose a reader sees and nothing that runs.";
  let fn = app_original_bible_gloss_generate;
  let r = await gloss_chapter_explains_text_replace(
    chapter_code,
    fn,
    before,
    after,
  );
  return r;
}
