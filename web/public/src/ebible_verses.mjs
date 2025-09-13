import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { ebible_verse } from "./ebible_verse.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_take } from "./list_take.mjs";
import { list_skip } from "./list_skip.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { each_reverse } from "./each_reverse.mjs";
import { whitespace_normalize } from "./whitespace_normalize.mjs";
import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { ebible_chapter_text } from "./ebible_chapter_text.mjs";
import { marker } from "./marker.mjs";
export async function ebible_verses(bible_folder, chapter_code) {
  marker("1");
  let { verse_numbers, text } = await ebible_chapter_text(
    bible_folder,
    chapter_code,
  );
  text = whitespace_normalize(text);
  let split = string_split_space(text);
  let filtered = list_filter(split, string_empty_not_is);
  function lambda(la) {
    function lambda2(verse_number) {
      let index = list_index_of(filtered, verse_number);
      let skipped = list_skip(filtered, index + 1);
      const v = ebible_verse(skipped, verse_number);
      la(v);
      filtered = list_take(filtered, index);
    }
    let ne = list_empty_not_is(filtered);
    if (ne) {
      const v = ebible_verse(filtered, "0");
      la(v);
    }
    each_reverse(verse_numbers, lambda2);
  }
  let list = list_adder(lambda);
  return filtered;
}
