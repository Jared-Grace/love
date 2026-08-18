import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { app_original_bible_gloss_glosses_write } from "./app_original_bible_gloss_glosses_write.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { gloss_glosses_write_file_path } from "./gloss_glosses_write_file_path.mjs";
export async function app_original_bible_gloss_glosses_write_file(
  chapter_code,
  verse_key,
) {
  "Take the new short English written for one passage out of the file it was handed over in, and mend that passage with it.";
  "A gloss is short, but it is still text a reader meets rather than a name, and some of them carry brackets around a word English needs and Greek does not. A command's words are read by the shell before anything else sees them, so a bracket arriving there stops meaning what it means on the page. Naming the passage instead keeps the command to two plain words and leaves the text in a file.";
  let path = gloss_glosses_write_file_path(
    chapter_code,
    verse_key,
    app_original_bible_gloss_generate,
  );
  let glosses = await file_read_json(path);
  let r = await app_original_bible_gloss_glosses_write(
    chapter_code,
    verse_key,
    glosses,
  );
  return r;
}
