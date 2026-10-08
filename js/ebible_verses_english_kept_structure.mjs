import { ebible_offline_index_flat_english_name } from "./ebible_offline_index_flat_english_name.mjs";
import { ebible_offline_kept_any_get } from "./ebible_offline_kept_any_get.mjs";
import { null_is } from "./null_is.mjs";
import { ebible_index_flat_chapter_verse_numbers } from "./ebible_index_flat_chapter_verse_numbers.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { list_map } from "./list_map.mjs";
import { global_function_call_cache_async } from "./global_function_call_cache_async.mjs";
export async function ebible_verses_english_kept_structure(chapter_code) {
  "the verses of one English chapter as numbers with no words, read off the English index a saved bible keeps beside it - or nothing where no saved bible keeps one";
  "a reader who saved only their own language is still asked English which verses a chapter has, by the verse picker and by the arrows to the next verse, and with no internet that question used to stop the page. the numbers are all those screens ever read from English, so the numbers are what is answered; the words are left empty rather than made up";
  "it is remembered for the reading, so the verse the arrows start from is the same verse they look for when pressed";
  async function get() {
    let name = ebible_offline_index_flat_english_name();
    let index_flat = await ebible_offline_kept_any_get(name);
    if (null_is(index_flat)) {
      return null;
    }
    let verse_numbers = ebible_index_flat_chapter_verse_numbers(
      index_flat,
      chapter_code,
    );
    let key = verse_number_key();
    function lambda(verse_number) {
      let verse = {
        [key]: verse_number,
        text: "",
      };
      return verse;
    }
    let verses = list_map(verse_numbers, lambda);
    return verses;
  }
  let value = await global_function_call_cache_async(
    ebible_verses_english_kept_structure,
    arguments,
    get,
  );
  return value;
}
