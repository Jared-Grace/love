import { firebase_upload_object_compressed_chunked } from "../../../love/public/src/firebase_upload_object_compressed_chunked.mjs";
import { ebible_version_chapters_cache } from "../../../love/public/src/ebible_version_chapters_cache.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_chapters_upload(bible_folder) {
  marker("1");
  let chapters = await ebible_version_chapters_cache(bible_folder);
  function lambda(value) {
    let v3 = {
      destination,
      value,
    };
    return v3;
  }
  await firebase_upload_object_compressed_chunked(chapters, lambda);
  return chapters;
}
