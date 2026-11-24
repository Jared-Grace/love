import { gloss_upload_namespace_en_learn_bible_portuguese } from "./gloss_upload_namespace_en_learn_bible_portuguese.mjs";
import { firebase_chapter_upload_path } from "./firebase_chapter_upload_path.mjs";
export function app_learn_eng_gloss_portuguese_generate_upload_path(
  chapter_code,
) {
  "Where one chapter of English words explained in Portuguese sits in storage.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01 - a word chosen from the Bible's own book and chapter numbering, not a path and not anything that runs. It is joined into an address and handed back as text; nothing here reads or writes a file.";
  let f_name = gloss_upload_namespace_en_learn_bible_portuguese();
  let destination = firebase_chapter_upload_path(f_name, chapter_code);
  return destination;
}
