import { arguments_assert } from "./arguments_assert.mjs";
import { invoke_cache_file_clear } from "./invoke_cache_file_clear.mjs";
import { bible_bdb_names_meanings } from "./bible_bdb_names_meanings.mjs";
export async function bible_bdb_names_meanings_cache_clear() {
  arguments_assert(arguments, 0);
  ("Forgets the kept join of name meanings, so the next asking fetches and reads the lexicon again.");
  ("THE KEPT ANSWER DOES NOT KNOW THE READER CHANGED. It is filed by the reader's name and arguments, not by what the reader does, so after the way meanings are read is mended the old answer is still handed back - measured the day nested brackets were fixed, when Abiram still came back as the and my. Run this after changing the reader, or to pick up a correction made upstream.");
  await invoke_cache_file_clear(bible_bdb_names_meanings, []);
}
