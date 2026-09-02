import { ebible_firebase_upload_path } from "./ebible_firebase_upload_path.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { firebase_storage_download_json_decompress } from "./firebase_storage_download_json_decompress.mjs";
import { property_get } from "./property_get.mjs";
import { bible_verses_paragraph_marks_removed } from "./bible_verses_paragraph_marks_removed.mjs";
export async function ebible_verses_storage_browser_fresh(
  bible_folder,
  chapter_code,
) {
  "one chapter straight off the internet, remembering nothing; the caller decides what to keep";
  "this exists so a whole-bible download does not leave a second copy of every chapter behind it: it is already writing each one where the reader will look for it, and a read-through copy of the same thing would double what the download costs in room";
  "THE PRINTER'S PARAGRAPH MARKS COME OFF HERE FOR THE SAME REASON THEY DO ON THE KEPT ROAD, and it has to be said twice because these are two roads and not one. What this hands back is written straight to where a reader will look for it, so a mark left on here is a mark stored on a reader's own disk, where nothing later will go looking for it.";
  let destination = ebible_firebase_upload_path(bible_folder, chapter_code);
  let project_url = firebase_storage_url_project_jg();
  let c = await firebase_storage_download_json_decompress(
    project_url,
    destination,
  );
  let verses = property_get(c, "verses");
  let unmarked = bible_verses_paragraph_marks_removed(verses);
  return unmarked;
}
