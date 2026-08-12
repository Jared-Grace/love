import { ebible_folders_chapters_codes_to_verses } from "./ebible_folders_chapters_codes_to_verses.mjs";
import { bible_interlinear_chapters } from "./bible_interlinear_chapters.mjs";
import { bible_verse_end_is } from "./bible_verse_end_is.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { each_multiple_async } from "./each_multiple_async.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { list_first } from "./list_first.mjs";
import { list_first_property } from "./list_first_property.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { list_find_property_get } from "./list_find_property_get.mjs";
import { list_index_last } from "./list_index_last.mjs";
import { list_map } from "./list_map.mjs";
import { list_add } from "./list_add.mjs";
import { list_add_pair } from "./list_add_pair.mjs";
import { lists_to_news } from "./lists_to_news.mjs";
import { property_get } from "./property_get.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { fn_name } from "./fn_name.mjs";
export async function bible_passages_grouped(bible_folders, chapters_codes) {
  "Divide the named chapters into passages, and hand back each one as its original-language wording, its wording in every bible asked for, the verse numbers it covers, and the chapter it belongs to.";
  "Dividing the text is separate from doing anything with a passage, so everything that authors for one - a sermon, a word-by-word gloss - cuts the chapter in exactly the same places, and a reader who has both in front of them sees them line up.";
  let verses_book_folders = await ebible_folders_chapters_codes_to_verses(
    chapters_codes,
    bible_folders,
  );
  let chapters_interlinear = await bible_interlinear_chapters();
  async function adder(la) {
    let originals = null;
    let verse_numbers = null;
    let texts = null;
    clear();
    function clear() {
      originals = [];
      texts = lists_to_news(bible_folders);
      verse_numbers = [];
    }
    async function each_chapter_verses(verses_chapter_folders) {
      let verses_chapter = list_first(verses_chapter_folders);
      let chapter_code = list_first_property(verses_chapter, "chapter_code");
      let interlinear = property_get(chapters_interlinear, chapter_code);
      async function each_verse(verse, index) {
        let text = property_get(verse, "text");
        let property_name = verse_number_key();
        let verse_number = property_get(verse, property_name);
        function mapper(verses_chapter_folder) {
          let property_find = verse_number_key();
          let words = list_find_property_get(
            verses_chapter_folder,
            property_find,
            verse_number,
            "text",
          );
          return words;
        }
        let texts_add = list_map(verses_chapter_folders, mapper);
        let original = null;
        if (not_equal(verse_number, "0")) {
          let property_name2 = verse_number_key();
          let original_verse = list_find_property(
            interlinear,
            property_name2,
            verse_number,
          );
          original = property_get(original_verse, "text");
        }
        list_add(originals, original);
        list_add_pair(texts, texts_add);
        list_add(verse_numbers, verse_number);
        ("Where a passage ends is decided by the first bible on the list and by no other, even though the passage is carried in all of them. That is deliberate. The game preaches one language at a time, and the one it preaches is the first - so a boundary that waited for every language to finish its sentence would be shaped by languages nobody reading this is reading.");
        ("The page that shows a reader several languages at once does wait for all of them, in ",
          fn_name("ebible_verse_languages_end_is"),
          ", and the two are not in disagreement: they are the same rule asked of different sets. Choosing passages across languages is its own piece of work and has not been done, so do not read this line as that work left unfinished.");
        let ei = bible_verse_end_is(text);
        let index_last = list_index_last(verses_chapter);
        if (ei || equal(index, index_last)) {
          la({
            originals,
            texts,
            verse_numbers,
            chapter_code,
          });
          clear();
        }
      }
      await each_index_async(verses_chapter, each_verse);
    }
    await each_multiple_async(verses_book_folders, each_chapter_verses);
  }
  let groups = await list_adder_async(adder);
  return groups;
}
