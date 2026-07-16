import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_binary_pair_boolean(fn) {
  "left/right operands (the keywords true and false) for a binary BOOLEAN operator lesson; picks a random one of the four true/false combinations whose result equals want_true, classifying them with the operator's own fn";
  let combinations = [
    { left: true, right: true },
    { left: true, right: false },
    { left: false, right: true },
    { left: false, right: false },
  ];
  function keyword(value) {
    if (value) {
      return js_keyword_true();
    }
    return js_keyword_false();
  }
  function pair(want_true) {
    function matches(combination) {
      let left = property_get(combination, "left");
      let right = property_get(combination, "right");
      let result = fn(left, right);
      return equal(result, want_true);
    }
    let matching = list_filter(combinations, matches);
    let chosen = list_random_item(matching);
    let coordinates = {
      left: keyword(property_get(chosen, "left")),
      right: keyword(property_get(chosen, "right")),
    };
    return coordinates;
  }
  return pair;
}
