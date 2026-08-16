import { app_original_bible_gloss_passage_entries } from "./app_original_bible_gloss_passage_entries.mjs";
import { app_original_bible_gloss_write } from "./app_original_bible_gloss_write.mjs";
import { error_json } from "./error_json.mjs";
import { gloss_entries_explains_set } from "./gloss_entries_explains_set.mjs";
import { null_is } from "./null_is.mjs";
export async function app_original_bible_gloss_explains_write(
  chapter_code,
  verse_key,
  explains,
) {
  "Mend the wording of every word explanation in one passage of the original-language Bible, keeping the words themselves as the store already spells them.";
  "Rewriting a whole passage to change its prose meant typing its Greek out again, and the letters do not survive that: an accented letter has more than one spelling that looks the same, so the passage stopped matching itself in a way nothing on the page shows. Handing over the wording alone removes the chance of that entirely.";
  "A passage nobody has written yet is refused rather than started, because there is nothing here to mend and wording alone would leave every word unnamed.";
  "The rest of the chapter is left where it stands, so a chapter can be mended a passage at a time over as many sittings as it takes.";
  let entries = await app_original_bible_gloss_passage_entries(
    chapter_code,
    verse_key,
  );
  if (null_is(entries)) {
    error_json({
      message: "this passage has no explanations yet to mend",
      chapter_code,
      verse_key,
    });
  }
  let message = chapter_code + " " + verse_key;
  gloss_entries_explains_set(entries, explains, message);
  let path = await app_original_bible_gloss_write(
    chapter_code,
    verse_key,
    entries,
  );
  return path;
}
