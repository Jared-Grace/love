import { invoke_cache_file } from "../../../love/public/src/invoke_cache_file.mjs";
import { ebible_version_chapters } from "../../../love/public/src/ebible_version_chapters.mjs";
export async function ebible_version_chapters_cache(bible_folder) {
  let v = await invoke_cache_file(ebible_version_chapters, [bible_folder]);
  return v;
}
