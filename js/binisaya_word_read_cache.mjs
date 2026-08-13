import { invoke_cache_file } from "./invoke_cache_file.mjs";
import { binisaya_word_read } from "./binisaya_word_read.mjs";
export async function binisaya_word_read_cache(word) {
  "One Cebuano word's entry, kept on this disk after the first reading so that asking for it again costs nothing.";
  let r = await invoke_cache_file(binisaya_word_read, [word]);
  return r;
}
