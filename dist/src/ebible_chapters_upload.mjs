import { property_get } from "../../../love/public/src/property_get.mjs";
import { ebible_firebase_upload_path } from "../../../love/public/src/ebible_firebase_upload_path.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { firebase_upload_object_compressed_chunked } from "../../../love/public/src/firebase_upload_object_compressed_chunked.mjs";
import { ebible_version_chapters_cache } from "../../../love/public/src/ebible_version_chapters_cache.mjs";
export async function ebible_chapters_upload(bible_folder) {
  let chapters = await ebible_version_chapters_cache(bible_folder);
  function lambda(value) {
    object_merge(value, {
      bible_folder,
    });
    let chapter_code = property_get(value, "chapter_code");
    let destination = ebible_firebase_upload_path(bible_folder, chapter_code);
    let v3 = {
      destination,
      value,
    };
    return v3;
  }
  await firebase_upload_object_compressed_chunked(chapters, lambda);
  return chapters;
}
