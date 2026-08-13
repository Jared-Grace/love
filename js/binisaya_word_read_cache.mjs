import { invoke_cache_file } from "./invoke_cache_file.mjs";
import { binisaya_word_read } from "./binisaya_word_read.mjs";
export async function binisaya_word_read_cache(word) {
  return await invoke_cache_file(binisaya_word_read, [word]);
}
