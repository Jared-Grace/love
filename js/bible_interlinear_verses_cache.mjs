import { bible_interlinear_verses } from "./bible_interlinear_verses.mjs";
import { invoke_cache_file } from "./invoke_cache_file.mjs";
export async function bible_interlinear_verses_cache() {
  let v = await invoke_cache_file(bible_interlinear_verses, []);
  return v;
}
