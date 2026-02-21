import { invoke_cache_file_remove } from "../../../love/public/src/invoke_cache_file_remove.mjs";
import { ebible_languages_chapters } from "../../../love/public/src/ebible_languages_chapters.mjs";
export async function ebible_languages_chapters_cache_remove() {
  await invoke_cache_file_remove(ebible_languages_chapters, []);
}
