import { app_en_learn_bible_gloss_urdu_generate_upload_namespace } from "./app_en_learn_bible_gloss_urdu_generate_upload_namespace.mjs";
import { firebase_chapter_upload_path } from "./firebase_chapter_upload_path.mjs";
export function app_en_learn_bible_gloss_urdu_generate_upload_path(
  chapter_code,
) {
  "Where one chapter of English words explained in Urdu sits in storage.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01 - a word chosen from the Bible's own book and chapter numbering, not a path and not anything that runs. It is joined into an address and handed back as text; nothing here reads or writes a file.";
  let f_name = app_en_learn_bible_gloss_urdu_generate_upload_namespace();
  let destination = firebase_chapter_upload_path(f_name, chapter_code);
  return destination;
}
