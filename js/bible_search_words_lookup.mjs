import { bible_chapters_each_verses } from "./bible_chapters_each_verses.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_version_chapters_numbering_matching } from "./ebible_version_chapters_numbering_matching.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { text_search_words } from "./text_search_words.mjs";
import { property_initialize_empty } from "./property_initialize_empty.mjs";
import { property_initialize_list } from "./property_initialize_list.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { each } from "./each.mjs";
import { each_async } from "./each_async.mjs";
export async function bible_search_words_lookup(bible_folders) {
  ("Every word of the given bibles, in any script, under the chapter and verse it stands in and the bibles that hold it there - cut and folded by ",
    fn_name("text_search_words"),
    ", the same cutting the search box will use.");
  ("A verse is only taken from a bible that numbers that chapter the way the bible the reader is shown does, for the reason ",
    fn_name("ebible_versions_english_downloadable_words_lookup"),
    " gives: an address read out of a differently numbered bible names somebody else's verse.");
  arguments_assert(arguments, 1);
  let result = {};
  async function version_add(bible_folder) {
    let numbered_alike =
      await ebible_version_chapters_numbering_matching(bible_folder);
    async function chapter_add(chapter_code, verses) {
      let same_numbering = list_includes(numbered_alike, chapter_code);
      if (not(same_numbering)) {
        return;
      }
      function verse_add(verse) {
        let text = property_get(verse, "text");
        let property_name = verse_number_key();
        let verse_number = property_get(verse, property_name);
        let words = text_search_words(text);
        function word_add(word) {
          let chapters = property_initialize_empty(result, word);
          let chapter = property_initialize_empty(chapters, chapter_code);
          let versions = property_initialize_list(chapter, verse_number);
          list_add_if_not_includes(versions, bible_folder);
        }
        each(words, word_add);
      }
      each(verses, verse_add);
    }
    await bible_chapters_each_verses(bible_folder, chapter_add);
  }
  await each_async(bible_folders, version_add);
  return result;
}
