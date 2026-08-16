import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { app_original_bible_gloss_passages } from "./app_original_bible_gloss_passages.mjs";
import { gloss_entries_explains_set } from "./gloss_entries_explains_set.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { gloss_passage_write } from "./gloss_passage_write.mjs";
import { gloss_passages_verses_key_find } from "./gloss_passages_verses_key_find.mjs";
export async function app_original_bible_gloss_explains_write(
  chapter_code,
  verse_key,
  explains,
) {
  "Mend the wording of every word explanation in one passage of the original-language Bible, keeping the words themselves as the store already spells them.";
  "Rewriting a whole passage to change its prose meant typing its Greek out again, and the letters do not survive that: an accented letter has more than one spelling that looks the same, so the passage stopped matching itself in a way nothing on the page shows. Handing over the wording alone removes the chance of that entirely.";
  "The rest of the chapter is left where it stands, so a chapter can be mended a passage at a time over as many sittings as it takes.";
  let passages = await app_original_bible_gloss_passages(chapter_code);
  let passage = gloss_passages_verses_key_find(passages, verse_key);
  let entries = gloss_passage_entries(passage);
  let message = chapter_code + " " + verse_key;
  gloss_entries_explains_set(entries, explains, message);
  let fn = app_original_bible_gloss_generate;
  let path = await gloss_passage_write(passage, entries, fn);
  return path;
}
