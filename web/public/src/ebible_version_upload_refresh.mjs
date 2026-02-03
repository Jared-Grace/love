import { ebible_version_chapters } from "../../../love/public/src/ebible_version_chapters.mjs";
import { invoke_cache_file_remove } from "../../../love/public/src/invoke_cache_file_remove.mjs";
import { ebible_version_upload } from "../../../love/public/src/ebible_version_upload.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_version_upload_refresh(bible_folder) {
  marker("1");
  await invoke_cache_file_remove(ebible_version_chapters, [bible_folder]);
  let v = await ebible_version_upload(bible_folder);
  return v;
}
