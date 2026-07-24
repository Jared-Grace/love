import { bible_interlinear_verses_cache } from "./bible_interlinear_verses_cache.mjs";
import { ebible_version_chapters_all_upload_path } from "./ebible_version_chapters_all_upload_path.mjs";
import { firebase_upload_object_compressed } from "./firebase_upload_object_compressed.mjs";
import { property_get } from "./property_get.mjs";
export async function bible_interlinear_chapters_all_upload() {
  ("publish the whole original-language bible as one bundle so an offline download is a single request, matching the fast path every other version has");
  let cache = await bible_interlinear_verses_cache();
  let bible_folder = property_get(cache, "bible_folder");
  let chapters = property_get(cache, "chapters");
  let destination = ebible_version_chapters_all_upload_path(bible_folder);
  await firebase_upload_object_compressed(destination, chapters);
}
