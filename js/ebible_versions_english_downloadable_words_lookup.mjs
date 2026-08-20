import { bible_search_symbols_plain } from "./bible_search_symbols_plain.mjs";
import { ebible_versions_english_downloadable_cache } from "./ebible_versions_english_downloadable_cache.mjs";
import { ebible_version_chapters_numbering_matching } from "./ebible_version_chapters_numbering_matching.mjs";
import { list_includes } from "./list_includes.mjs";
import { property_get } from "./property_get.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { bible_search_words } from "./bible_search_words.mjs";
import { text_transform_lookup } from "./text_transform_lookup.mjs";
import { equal_not } from "./equal_not.mjs";
import { property_initialize_empty } from "./property_initialize_empty.mjs";
import { property_initialize_list } from "./property_initialize_list.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { each } from "./each.mjs";
import { ebible_chapters_each_verses_check_with } from "./ebible_chapters_each_verses_check_with.mjs";
import { each_async } from "./each_async.mjs";
import { not } from "./not.mjs";
export async function ebible_versions_english_downloadable_words_lookup() {
  "Every word of every English bible this repo can download, under the chapter and verse it stands in, and under which bibles spell it there.";
  "A verse is only taken from a bible that numbers that chapter the way the bible the reader is shown does. An address read out of a differently numbered bible names somebody else's verse - the Douay-Rheims Psalm ten is the Psalm eleven a reader is looking at - so the words it promised are not in what comes up, and one such bible spoils the search for every reader of the others.";
  let plain = bible_search_symbols_plain();
  let bible_folders = await ebible_versions_english_downloadable_cache();
  let result = {};
  async function lambda2(bible_folder) {
    let numbered_alike =
      await ebible_version_chapters_numbering_matching(bible_folder);
    async function lambda(chapter_code, verses) {
      let same_numbering = list_includes(numbered_alike, chapter_code);
      if (not(same_numbering)) {
        return;
      }
      function lambda4(verse) {
        let text = property_get(verse, "text");
        let property_name = verse_number_key();
        let verse_number = property_get(verse, property_name);
        let split = bible_search_words(text);
        function lambda5(lower) {
          word_add(lower);
          ("a name written Æneas is filed under aeneas as well, so the reader who has no key for it still reaches the verse");
          let t = text_transform_lookup(lower, plain);
          if (equal_not(t, lower)) {
            word_add(t);
          }
          function word_add(lower_word) {
            let word = property_initialize_empty(result, lower_word);
            let chapter = property_initialize_empty(word, chapter_code);
            let versions = property_initialize_list(chapter, verse_number);
            list_add_if_not_includes(versions, bible_folder);
          }
        }
        each(split, lambda5);
      }
      each(verses, lambda4);
    }
    await ebible_chapters_each_verses_check_with(bible_folder, lambda);
  }
  await each_async(bible_folders, lambda2);
  return result;
}
