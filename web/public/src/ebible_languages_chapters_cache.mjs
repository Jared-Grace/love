import { ebible_languages_chapters } from "../../../love/public/src/ebible_languages_chapters.mjs";
import { invoke_cache_file } from "../../../love/public/src/invoke_cache_file.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_languages_chapters_cache() {
  marker("1");
  let v = await invoke_cache_file(ebible_languages_chapters, []);
  return v;
}
