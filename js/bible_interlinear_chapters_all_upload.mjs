import { bible_folder_key } from "./bible_folder_key.mjs";
import { bible_interlinear_verses } from "./bible_interlinear_verses.mjs";
import { ebible_version_chapters_all_upload_path } from "./ebible_version_chapters_all_upload_path.mjs";
import { firebase_upload_object_compressed } from "./firebase_upload_object_compressed.mjs";
import { property_get } from "./property_get.mjs";
export async function bible_interlinear_chapters_all_upload() {
  "publish the whole original-language bible as one bundle so an offline download is a single request, matching the fast path every other version has";
  "The text is read fresh rather than from the kept copy, for the reason the other two publishers read it fresh: what goes up here is served as scripture, and a kept copy made under an older reading of the public-domain base is published as the text itself.";
  let interlinear = await bible_interlinear_verses();
  let property_name = bible_folder_key();
  let bible_folder = property_get(interlinear, property_name);
  let chapters = property_get(interlinear, "chapters");
  let destination = ebible_version_chapters_all_upload_path(bible_folder);
  await firebase_upload_object_compressed(destination, chapters);
}
