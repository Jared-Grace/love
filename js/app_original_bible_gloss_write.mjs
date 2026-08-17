import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { app_original_bible_gloss_passages } from "./app_original_bible_gloss_passages.mjs";
import { gloss_write_generic } from "./gloss_write_generic.mjs";
export async function app_original_bible_gloss_write(
  chapter_code,
  verse_key,
  entries,
) {
  "Save one passage's authored word explanations into the original-language gloss store, under the passage the given verses name.";
  let passages_read = app_original_bible_gloss_passages;
  let fn = app_original_bible_gloss_generate;
  let path = await gloss_write_generic(
    chapter_code,
    verse_key,
    entries,
    passages_read,
    fn,
  );
  return path;
}
