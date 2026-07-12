import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_chapters_upload } from "./ebible_chapters_upload.mjs";
import { ebible_version_chapters } from "./ebible_version_chapters.mjs";
import { invoke_cache_file_remove } from "./invoke_cache_file_remove.mjs";
export async function ebible_chapters_upload_refresh(bible_folder) {
  arguments_assert(arguments, 1);
  await invoke_cache_file_remove(ebible_version_chapters, [bible_folder]);
  let chapters = await ebible_chapters_upload(bible_folder);
}
