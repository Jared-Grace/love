import { gloss_chapters_entries_edits_apply } from "./gloss_chapters_entries_edits_apply.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
export async function app_ceb_bible_gloss_entries_edits_apply(path) {
  "Put a file of hand-written Cebuano explanations into the gloss store, filling in words that were left with none and replacing ones that drifted onto the wrong word.";
  "This corrects what is held here. Putting the corrected chapters where readers get them is a separate step, on purpose: it changes what somebody already reading a chapter sees next time they open it.";
  "$plain path";
  "the path names a file of authored explanations to read. Nothing in it is run.";
  let fn = app_ceb_bible_gloss_generate;
  let r = await gloss_chapters_entries_edits_apply(path, fn);
  return r;
}
