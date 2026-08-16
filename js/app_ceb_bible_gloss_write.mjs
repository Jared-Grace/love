import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { app_ceb_bible_gloss_passages } from "./app_ceb_bible_gloss_passages.mjs";
import { gloss_passage_write } from "./gloss_passage_write.mjs";
import { gloss_passages_verses_key_find } from "./gloss_passages_verses_key_find.mjs";
export async function app_ceb_bible_gloss_write(
  chapter_code,
  verse_key,
  entries,
) {
  "Save one passage's authored word explanations into the Cebuano gloss store, under the passage the given verses name.";
  "The passage is looked up rather than described, so its Cebuano wording and its English wording come from the same reading the store was built with and cannot be mistyped here.";
  let passages = await app_ceb_bible_gloss_passages(chapter_code);
  let passage = gloss_passages_verses_key_find(passages, verse_key);
  let fn = app_ceb_bible_gloss_generate;
  let path = await gloss_passage_write(passage, entries, fn);
  return path;
}
