import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_built_bible_folder } from "./bible_glyph_chapters_built_bible_folder.mjs";
import { ebible_firebase_upload_path } from "./ebible_firebase_upload_path.mjs";
export function bible_glyph_chapter_built_destination(chapter_code) {
  arguments_assert(arguments, 1);
  ("$plain chapter_code");
  ("the code names one chapter, spelled as the chapter codes spell it. It names a file in storage and nothing that runs.");
  ("Where one built picture Bible chapter sits in storage. The uploader and the page both ask here, so the two cannot name different places.");
  let folder = bible_glyph_chapters_built_bible_folder();
  let destination = ebible_firebase_upload_path(folder, chapter_code);
  return destination;
}
