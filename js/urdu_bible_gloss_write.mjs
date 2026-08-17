import { urdu_bible_gloss_generate } from "./urdu_bible_gloss_generate.mjs";
import { urdu_bible_gloss_passages } from "./urdu_bible_gloss_passages.mjs";
import { gloss_write_generic } from "./gloss_write_generic.mjs";
export async function urdu_bible_gloss_write(chapter_code, verse_key, entries) {
  "Save one passage's English words explained in Urdu into the Urdu gloss store, under the passage the given verses name.";
  let passages_read = urdu_bible_gloss_passages;
  let fn = urdu_bible_gloss_generate;
  let path = await gloss_write_generic(
    chapter_code,
    verse_key,
    entries,
    passages_read,
    fn,
  );
  return path;
}
