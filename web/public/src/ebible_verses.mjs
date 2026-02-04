import { list_index_of_last } from "../../../love/public/src/list_index_of_last.mjs";
import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
import { integer_is } from "../../../love/public/src/integer_is.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { integer_to } from "../../../love/public/src/integer_to.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { log_json } from "../../../love/public/src/log_json.mjs";
import { string_replace } from "../../../love/public/src/string_replace.mjs";
import { ebible_verses_before } from "../../../love/public/src/ebible_verses_before.mjs";
import { ebible_verses_browser } from "../../../love/public/src/ebible_verses_browser.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { urdu_allah_to_god } from "../../../love/public/src/urdu_allah_to_god.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
import { ebible_verse_new } from "../../../love/public/src/ebible_verse_new.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { list_take } from "../../../love/public/src/list_take.mjs";
import { list_skip } from "../../../love/public/src/list_skip.mjs";
import { whitespace_normalize } from "../../../love/public/src/whitespace_normalize.mjs";
import { string_empty_not_is } from "../../../love/public/src/string_empty_not_is.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { string_split_space } from "../../../love/public/src/string_split_space.mjs";
import { ebible_chapter_text } from "../../../love/public/src/ebible_chapter_text.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { list_reverse } from "../../../love/public/src/list_reverse.mjs";
import { each_reverse_previous } from "./each_reverse_previous.mjs";
export async function ebible_verses(bible_folder, chapter_code) {
  if (browser_is()) {
    let verses = await ebible_verses_browser(bible_folder, chapter_code);
    return verses;
  }
  marker("1");
  let v2 = await ebible_chapter_text(bible_folder, chapter_code);
  let property = "text";
  let text = object_property_get(v2, property);
  let verse_numbers = object_property_get(v2, "verse_numbers");
  log_json({
    verse_numbers,
  });
  text = whitespace_normalize(text);
  text = urdu_allah_to_god(text);
  let split = string_split_space(text);
  let filtered = list_filter(split, string_empty_not_is);
  function lambda(la) {
    function lambda_each_reverse(nn, nn_previous) {
      let name = object_property_get(nn, "name");
      let number = object_property_get(nn, "number");
      let mapped = list_map(filtered, integer_to);
      let filtered2 = list_filter(mapped, integer_is);
      log({
        filtered2,
        name,
      });
      let index = list_index_of_last(filtered, name);
      if (null_not_is(nn_previous)) {
      }
      let skipped = list_skip(filtered, index + 1);
      const v = ebible_verse_new(skipped, number);
      la(v);
      filtered = list_take(filtered, index);
    }
    each_reverse_previous(verse_numbers, lambda_each_reverse);
  }
  let verses_unfiltered = list_adder(lambda);
  let ne = list_empty_not_is(filtered);
  if (ne) {
    let verse_number = ebible_verses_before();
    const v = ebible_verse_new(filtered, verse_number);
    list_add(verses_unfiltered, v);
  }
  list_reverse(verses_unfiltered);
  function lambda3(item) {
    let value = object_property_get(item, property);
    let replaced = string_replace(value, "[]", "");
    let n = string_empty_not_is(replaced);
    return n;
  }
  let verses = list_filter(verses_unfiltered, lambda3);
  return verses;
}
