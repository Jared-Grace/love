import { log } from "../../../love/public/src/log.mjs";
import { list_adder_multiple } from "../../../love/public/src/list_adder_multiple.mjs";
import { string_includes } from "../../../love/public/src/string_includes.mjs";
import { each_object } from "../../../love/public/src/each_object.mjs";
import { list_join_empty } from "../../../love/public/src/list_join_empty.mjs";
import { string_pad_space } from "../../../love/public/src/string_pad_space.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { string_letters_is } from "../../../love/public/src/string_letters_is.mjs";
import { string_split_empty } from "../../../love/public/src/string_split_empty.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_unique } from "../../../love/public/src/list_unique.mjs";
export function g_themes(text) {
  let split = string_split_empty(text);
  function lambda2(item) {
    let li = string_letters_is(item);
    if (not(li)) {
      item = string_pad_space(item);
    }
    return item;
  }
  let mapped2 = list_map(split, lambda2);
  let joined = list_join_empty(mapped2);
  log(joined);
  let map = {
    evil: "morality",
    good: "morality",
  };
  function lambda4(la) {
    function lambda3(word, list) {
      let padded = string_pad_space(word);
      let i = string_includes(joined, padded);
      if (i) {
        la(list);
      }
    }
    each_object(map, lambda3);
  }
  let list = list_adder_multiple(lambda4);
  let themes = list_unique(list);
  return themes;
}
