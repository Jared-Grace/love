import { bible_interlinear_chapters } from "./bible_interlinear_chapters.mjs";
import { invoke_cache_file_remove_if_exists } from "./invoke_cache_file_remove_if_exists.mjs";
import { bible_interlinear_verses } from "./bible_interlinear_verses.mjs";
import { bible_interlinear_chapters_words } from "./bible_interlinear_chapters_words.mjs";
export async function bible_interlinear_caches_clear() {
  "Throws away every kept copy of the interlinear, so the next reader builds it again from";
  "the tables.";
  "To run whenever the base-text filter changes. Each of these is a copy of a reading that";
  "decides which words belong to the public-domain base and which belong to an edition still";
  "under copyright, and a copy made under the old reading keeps answering with the old text";
  "long after the reading was corrected - silently, because a cache that is present is a";
  "cache that is trusted. The one feeding the upload path was eight months old.";
  "Clearing them costs time and nothing else: the tables are still there, so every value";
  "here can be built again. Keeping a stale one costs the thing the filter exists to stop.";
  "They all go together on purpose. They are copies of the same underlying decision, so";
  "clearing one and leaving another is a repo that disagrees with itself about what the";
  "text of scripture is, which is worse than any one answer on its own.";
  let names = [];
  async function cache_clear(fn) {
    await invoke_cache_file_remove_if_exists(fn, []);
    names.push(fn.name);
  }
  await cache_clear(bible_interlinear_verses);
  await cache_clear(bible_interlinear_chapters_words);
  await cache_clear(bible_interlinear_chapters);
  let r = {
    cleared: names,
  };
  return r;
}
