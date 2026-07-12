import { ebible_languages_chapters } from "./ebible_languages_chapters.mjs";
import { invoke_cache_file } from "./invoke_cache_file.mjs";
export async function ebible_languages_chapters_cache() {
  let v = await invoke_cache_file(ebible_languages_chapters, []);
  return v;
}
