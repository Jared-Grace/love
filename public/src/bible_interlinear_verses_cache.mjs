import { bible_interlinear_verses } from "../../../love/public/src/bible_interlinear_verses.mjs";
import { invoke_cache_file } from "../../../love/public/src/invoke_cache_file.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function bible_interlinear_verses_cache() {
  marker("1");
  return await invoke_cache_file(bible_interlinear_verses, []);
}
