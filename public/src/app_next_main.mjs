import { list_find_property } from "../../../love/public/src/list_find_property.mjs";
import { ebible_languages } from "../../../love/public/src/ebible_languages.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { ebible_verse } from "../../../love/public/src/ebible_verse.mjs";
import { list_map_async } from "../../../love/public/src/list_map_async.mjs";
import { string_split_plus } from "../../../love/public/src/string_split_plus.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_first_second } from "../../../love/public/src/list_first_second.mjs";
import { object_adder } from "../../../love/public/src/object_adder.mjs";
import { string_split_equal } from "../../../love/public/src/string_split_equal.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { string_split_comma } from "../../../love/public/src/string_split_comma.mjs";
import { string_prefix_without } from "../../../love/public/src/string_prefix_without.mjs";
import { html_hash_get } from "../../../love/public/src/html_hash_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_next_main() {
  marker("1");
  let hash = html_hash_get();
  let without = string_prefix_without(hash, "#");
  let split = string_split_comma(without);
  function lambda3(oa) {
    function lambda(s) {
      let split2 = string_split_equal(s);
      let v = list_first_second(split2);
      let second = object_property_get(v, "second");
      let first = object_property_get(v, "first");
      oa(first, second);
    }
    each(split, lambda);
  }
  let result = object_adder(lambda3);
  let c = object_property_get(result, "c");
  let verse = object_property_get(result, "v");
  let l = object_property_get(result, "l");
  let languages_chosen = string_split_plus(l);
  let languages_list = ebible_languages();
  async function lambda2(language) {
      let filtered = list_find_property(languages_list, "language", language);
    let bible_folder = object_property_get(filtered, "bible_folder");
    let d = await ebible_verse(bible_folder, c, verse);
  }
  let mapped = await list_map_async(languages_chosen, lambda2);
  log({
    mapped,
  });
}
