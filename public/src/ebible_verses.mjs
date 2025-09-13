import { list_adder } from "./list_adder.mjs";
import { list_take } from "./list_take.mjs";
import { list_join_space } from "./list_join_space.mjs";
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
  function lambda(la) {}
  let list = list_adder(lambda);
  function lambda2(item) {
    let index = list_index_of(filtered, item);
    let skipped = list_skip(filtered, index + 1);
    let joined = list_join_space(skipped);
    filtered = list_take(filtered, index);
  }
  each_reverse(verse_numbers, lambda2);
  return filtered;
}
