import { object_adder } from "../../../love/public/src/object_adder.mjs";
import { string_split_equal } from "../../../love/public/src/string_split_equal.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { string_split_comma } from "../../../love/public/src/string_split_comma.mjs";
import { string_prefix_without } from "../../../love/public/src/string_prefix_without.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { html_hash_get } from "../../../love/public/src/html_hash_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function app_next_main() {
  marker("1");
  let hash = html_hash_get();
  let without = string_prefix_without(hash, "#");
  let split = string_split_comma(without);
  function lambda3(oa) {
    function lambda(s) {
      let split2 = string_split_equal(s);
    }
    each(split, lambda);
  }
  let reuslt = object_adder(lambda3);
  log({
    split,
  });
}
