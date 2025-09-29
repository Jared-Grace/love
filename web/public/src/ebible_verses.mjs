import { urdu_allah_to_god } from "../../../love/public/src/urdu_allah_to_god.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_index_of_last } from "../../../love/public/src/list_index_of_last.mjs";
import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
import { ebible_verse_new } from "../../../love/public/src/ebible_verse_new.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { list_take } from "../../../love/public/src/list_take.mjs";
import { list_skip } from "../../../love/public/src/list_skip.mjs";
import { each_reverse } from "../../../love/public/src/each_reverse.mjs";
import { whitespace_normalize } from "../../../love/public/src/whitespace_normalize.mjs";
import { string_empty_not_is } from "../../../love/public/src/string_empty_not_is.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { string_split_space } from "../../../love/public/src/string_split_space.mjs";
import { ebible_chapter_text } from "../../../love/public/src/ebible_chapter_text.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { list_reverse } from "../../../love/public/src/list_reverse.mjs";
export async function ebible_verses(bible_folder, chapter_code) {
  marker("1");
  let { verse_numbers, text } = await ebible_chapter_text(
    bible_folder,
    chapter_code,
  );
  text = whitespace_normalize(text);
  text = urdu_allah_to_god(text);
  let split = string_split_space(text);
  let filtered = list_filter(split, string_empty_not_is);
  function lambda(la) {
    function lambda2(verse_number) {
      verse_number += "";
      let index = list_index_of_last(filtered, verse_number);
      let skipped = list_skip(filtered, index + 1);
      const v = ebible_verse_new(skipped, verse_number);
      la(v);
      filtered = list_take(filtered, index);
    }
    each_reverse(verse_numbers, lambda2);
  }
  let list = list_adder(lambda);
  let ne = list_empty_not_is(filtered);
  if (ne) {
    const v = ebible_verse_new(filtered, "0");
    list_add(list, v);
  }
  list_reverse(list);
  return list;
}
