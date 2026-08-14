import { bible_strong_chapter_tallies } from "./bible_strong_chapter_tallies.mjs";
import { invoke_cache_file } from "./invoke_cache_file.mjs";

export async function bible_strong_chapter_tallies_cache() {
  "The per-chapter Strong's tallies, counted once and kept.";
  "Counting walks every word in the Bible, and a chapter being glossed asks about each of its own words in turn. Without this the whole book would be counted once per word.";
  let v = await invoke_cache_file(bible_strong_chapter_tallies, []);
  return v;
}
