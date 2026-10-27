import { arguments_assert } from "./arguments_assert.mjs";
import { invoke_cache_file_global } from "./invoke_cache_file_global.mjs";
import { bible_bdb_names_meanings } from "./bible_bdb_names_meanings.mjs";
export async function bible_bdb_names_meanings_cache() {
  arguments_assert(arguments, 0);
  ("What Brown, Driver and Briggs say each Hebrew proper name means, fetched and joined once and kept, because the join reads four megabytes from the network to answer a few hundred lines.");
  let v = await invoke_cache_file_global(bible_bdb_names_meanings, []);
  return v;
}
