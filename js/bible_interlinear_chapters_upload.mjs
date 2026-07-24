import { property_get } from "./property_get.mjs";
import { ebible_firebase_upload_path } from "./ebible_firebase_upload_path.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { firebase_upload_object_compressed_chunked } from "./firebase_upload_object_compressed_chunked.mjs";
import { bible_interlinear_verses_cache } from "./bible_interlinear_verses_cache.mjs";
export async function bible_interlinear_chapters_upload() {
  ("publish the original-language text one file per chapter, in the exact compressed shape every other version uses, so the reader fetches `bible/original/<chapter>.json` the same way it fetches any translation");
  let cache = await bible_interlinear_verses_cache();
  let bible_folder = property_get(cache, "bible_folder");
  let chapters = property_get(cache, "chapters");
  function lambda(value) {
    object_merge_set(value, {
      bible_folder,
    });
    let chapter_code = property_get(value, "chapter_code");
    let destination = ebible_firebase_upload_path(bible_folder, chapter_code);
    let v = {
      destination,
      value,
    };
    return v;
  }
  await firebase_upload_object_compressed_chunked(chapters, lambda);
  return chapters;
}
