import { text_includes_not } from "./text_includes_not.mjs";
import { html_hash_symbol } from "./html_hash_symbol.mjs";
import { object_adder } from "./object_adder.mjs";
import { each } from "./each.mjs";
import { property_get } from "./property_get.mjs";
import { list_first_second } from "./list_first_second.mjs";
import { text_split_equal } from "./text_split_equal.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
import { html_hash_get } from "./html_hash_get.mjs";
export function html_hash_object_get() {
  function lambda3(oa) {
    let hash_url = html_hash_get();
    let prefix = html_hash_symbol();
    let n = text_includes_not(hash_url, prefix);
    if (n) {
      return;
    }
    let without = text_prefix_without(hash_url, prefix);
    let split = text_split_comma(without);
    function lambda(s) {
      let split2 = text_split_equal(s);
      let v = list_first_second(split2);
      let second = property_get(v, "second");
      let first = property_get(v, "first");
      oa(first, second);
    }
    each(split, lambda);
  }
  let hash = object_adder(lambda3);
  return hash;
}
