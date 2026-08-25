import { ebible_versions_english_books_count } from "./ebible_versions_english_books_count.mjs";
import { invoke_cache_file } from "./invoke_cache_file.mjs";
export async function ebible_versions_english_books_count_cache() {
  "How many books each English version holds, worked out once and read off a file after that, because counting them opens every version.";
  let v = await invoke_cache_file(ebible_versions_english_books_count, []);
  return v;
}
