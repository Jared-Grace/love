import { ebible_versions_english_downloadable_words_lookup_cache } from "./ebible_versions_english_downloadable_words_lookup_cache.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_map } from "./list_map.mjs";
import { bible_search_word_path } from "./bible_search_word_path.mjs";
import { bible_search_folder } from "./bible_search_folder.mjs";
import { firebase_storage_list_jg } from "./firebase_storage_list_jg.mjs";
import { list_filter_includes_not } from "./list_filter_includes_not.mjs";
import { each_async } from "./each_async.mjs";
import { firebase_storage_delete } from "./firebase_storage_delete.mjs";
import { list_size } from "./list_size.mjs";
export async function bible_search_words_stale_remove() {
  "Take down the words storage still holds that the search index no longer knows.";
  "Putting the index up again only writes over the words it still has. A word the index has dropped - one standing only in a chapter now left out, because the bible it came from numbers that chapter its own way - is not written over by anything, so it stays up there answering with the addresses it was built from and the search goes on being wrong about exactly the words the rebuild was for.";
  "It asks storage what is actually there rather than working from what was last put up, because that is the only reading that can see a word nothing on this disk remembers writing.";
  let result = await ebible_versions_english_downloadable_words_lookup_cache();
  let words = properties_get(result);
  let wanted = list_map(words, bible_search_word_path);
  let folder = bible_search_folder();
  let held = await firebase_storage_list_jg(folder);
  let stale = list_filter_includes_not(held, wanted);
  await each_async(stale, firebase_storage_delete);
  let r = {
    held: list_size(held),
    wanted: list_size(wanted),
    removed: stale,
  };
  return r;
}
