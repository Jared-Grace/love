import { bible_interlinear_chapters } from "./bible_interlinear_chapters.mjs";
import { invoke_cache_file } from "./invoke_cache_file.mjs";
export async function bible_interlinear_chapters_cache() {
  "The chapter-by-chapter original text, read once and kept.";
  "The reading behind it walks the whole Berean table, so it costs about the same whether one chapter is wanted or all of them. Every caller that divides a chapter into passages asks for it, and a sweep over a store asks once per chapter - measured at eleven seconds each, which is the whole cost of reading a store.";
  let v = await invoke_cache_file(bible_interlinear_chapters, []);
  return v;
}
