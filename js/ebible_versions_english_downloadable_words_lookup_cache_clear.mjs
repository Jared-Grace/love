import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { invoke_cache_file_clear } from "./invoke_cache_file_clear.mjs";
import { ebible_versions_english_downloadable_words_lookup } from "./ebible_versions_english_downloadable_words_lookup.mjs";
export async function ebible_versions_english_downloadable_words_lookup_cache_clear() {
  arguments_assert(arguments, 0);
  ("Forgets the kept English word index, so the next asking reads every English Bible again and files each word under the root it has now.");
  ("THE KEPT INDEX DOES NOT KNOW THE ROOTS CHANGED. It is filed by the builder's name, not by what ",
    fn_name("word_root"),
    " answers, so after the rooting of words is mended the old index is still handed back and uploaded unchanged. Run this after changing how a word reaches its root, then upload the index again.");
  await invoke_cache_file_clear(
    ebible_versions_english_downloadable_words_lookup,
    [],
  );
}
