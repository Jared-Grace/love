import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_chapters_punctuation_entries_repair } from "./gloss_chapters_punctuation_entries_repair.mjs";
export async function app_ceb_bible_gloss_punctuation_entries_repair() {
  "Drop every explanation in the Cebuano gloss store that explains a mark rather than a word.";
  "This repairs what is held here. Putting the repaired chapters where readers get them is a separate step, on purpose: it changes what somebody already reading a chapter sees next time they open it.";
  let fn = app_ceb_bible_gloss_generate;
  let r = await gloss_chapters_punctuation_entries_repair(fn);
  return r;
}
