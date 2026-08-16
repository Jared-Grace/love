import { app_original_bible_gloss_explains_write } from "./app_original_bible_gloss_explains_write.mjs";
import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { gloss_explains_write_file_path } from "./gloss_explains_write_file_path.mjs";
export async function app_original_bible_gloss_explains_write_file(
  chapter_code,
  verse_key,
) {
  "Take the new wordings written for one passage out of the file they were handed over in, and mend that passage with them.";
  "The wordings are prose, and prose is the one thing that must never travel as part of a command. A command's words are read by the shell before anything else sees them, so a quotation mark or a bracket in a sentence ends the sentence early and the rest arrives as further instructions. Naming the passage instead keeps the command to two plain words and leaves the prose in a file, where nothing reads it but the reader it was written for.";
  let path = gloss_explains_write_file_path(
    chapter_code,
    verse_key,
    app_original_bible_gloss_generate,
  );
  let explains = await file_read_json(path);
  let r = await app_original_bible_gloss_explains_write(
    chapter_code,
    verse_key,
    explains,
  );
  return r;
}
