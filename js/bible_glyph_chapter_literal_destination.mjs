import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_literal_bible_folder } from "./bible_glyph_chapters_literal_bible_folder.mjs";
import { ebible_firebase_upload_path } from "./ebible_firebase_upload_path.mjs";
export function bible_glyph_chapter_literal_destination(chapter_code) {
  arguments_assert(arguments, 1);
  ("$plain chapter_code");
  ("Where one chapter's interlinear words for the word-for-word drawing are stored.");
  let folder = bible_glyph_chapters_literal_bible_folder();
  let destination = ebible_firebase_upload_path(folder, chapter_code);
  return destination;
}
