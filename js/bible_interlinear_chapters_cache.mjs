import { fn_name } from "./fn_name.mjs";
import { bible_interlinear_chapters } from "./bible_interlinear_chapters.mjs";
import { invoke_cache_file } from "./invoke_cache_file.mjs";
export async function bible_interlinear_chapters_cache() {
  "The chapter-by-chapter original text, read once and kept.";
  "The reading behind it walks the whole Berean table, so it costs about the same whether one chapter is wanted or all of them. Every caller that divides a chapter into passages asks for it, and a sweep over a store asks once per chapter - measured at eleven seconds each, which is the whole cost of reading a store.";
  ("Two callers must keep reading fresh and must not be moved to this, however slow that is. ",
    fn_name("gloss_chapter_base_repair"),
    " runs precisely because the base text has just changed, so a kept copy would have it repairing authored chapters against the very wording it was called to correct away from; and ",
    fn_name("bible_verses_uplifting_package_upload"),
    " publishes that text, where a kept copy is published as scripture. That second one has already happened, with a copy eight months old.");
  ("Both are the cost of being right about the text rather than quick about it, and the difference between them and a caller that may use this is what the answer is for: dividing a chapter into passages consumes the text, while these two decide it.");
  let v = await invoke_cache_file(bible_interlinear_chapters, []);
  return v;
}
