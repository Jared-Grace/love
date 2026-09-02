import { ebible_firebase_upload_path } from "./ebible_firebase_upload_path.mjs";
import { firebase_storage_verses_download_cache } from "./firebase_storage_verses_download_cache.mjs";
import { bible_verses_paragraph_marks_removed } from "./bible_verses_paragraph_marks_removed.mjs";
export async function ebible_verses_storage_browser(
  bible_folder,
  chapter_code,
) {
  "one chapter for a reader to look at, kept on this disk once it has been read once, so turning back to it costs nothing";
  "the sibling ending in fresh is the same read without the keeping, and is for whoever is already storing what comes back";
  "THE PRINTER'S PARAGRAPH MARKS COME OFF HERE BECAUSE THEY ARE IN WHAT STORAGE HOLDS. The chapters were uploaded before the reading that makes them took the marks out, so a chapter downloaded today still carries them however the reading behaves now. Taking them off as the chapter is handed over means no reader has to know that, and no reader can forget.";
  let destination = ebible_firebase_upload_path(bible_folder, chapter_code);
  let verses = await firebase_storage_verses_download_cache(destination);
  let unmarked = bible_verses_paragraph_marks_removed(verses);
  return unmarked;
}
