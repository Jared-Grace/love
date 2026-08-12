import { bible_interlinear_chapters_words } from "./bible_interlinear_chapters_words.mjs";
import { invoke_cache_file } from "./invoke_cache_file.mjs";
"The per-word interlinear, read once and kept. The source table is a 237 MB JSON, so the";
"uncached walk is far too slow to sit inside a loop over a chapter's passages - authoring";
"one chapter would otherwise read the whole file once per passage.";
export async function bible_interlinear_chapters_words_cache() {
  let v = await invoke_cache_file(bible_interlinear_chapters_words, []);
  return v;
}
