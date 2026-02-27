import { ebible_version_chapters } from "../../../love/public/src/ebible_version_chapters.mjs";
import { invoke_cache_file_remove } from "../../../love/public/src/invoke_cache_file_remove.mjs";
export async function sandbox() {
  let bible_folder = "engbsb";
  await invoke_cache_file_remove(ebible_version_chapters, [bible_folder]);
}
