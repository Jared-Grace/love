import { app_original_bible_gloss_passage_entries } from "./app_original_bible_gloss_passage_entries.mjs";
import { app_original_bible_gloss_write } from "./app_original_bible_gloss_write.mjs";
import { error_json } from "./error_json.mjs";
import { gloss_entries_glosses_set } from "./gloss_entries_glosses_set.mjs";
import { null_is } from "./null_is.mjs";
export async function app_original_bible_gloss_glosses_write(
  chapter_code,
  verse_key,
  glosses,
) {
  "Mend the short English standing under the words of one passage of the original-language Bible, keeping the words themselves as the store already spells them and the prose beside them as it already reads.";
  "A passage nobody has written yet is refused rather than started, because there is nothing here to mend and short English alone would leave every word without the prose that explains it.";
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
  gloss_entries_glosses_set(entries, glosses, message);
  let path = await app_original_bible_gloss_write(
    chapter_code,
    verse_key,
    entries,
  );
  return path;
}
