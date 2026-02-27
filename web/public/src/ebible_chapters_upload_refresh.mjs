import { ebible_chapters_upload } from "../../../love/public/src/ebible_chapters_upload.mjs";
import { ebible_version_chapters } from "../../../love/public/src/ebible_version_chapters.mjs";
import { invoke_cache_file_remove } from "../../../love/public/src/invoke_cache_file_remove.mjs";
export async function ebible_chapters_upload_refresh(bible_folder) {
  await invoke_cache_file_remove(ebible_version_chapters, [bible_folder]);
  let chapters = await ebible_chapters_upload(bible_folder);
}
