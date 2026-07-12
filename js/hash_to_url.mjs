import { html_hash_symbol } from "./html_hash_symbol.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_adder } from "./list_adder.mjs";
import { each_object } from "./each_object.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function hash_to_url(hash) {
  function lambda3(la) {
    function lambda(value, property) {
      let part = text_combine_multiple([property, "=", value]);
      la(part);
    }
    each_object(hash, lambda);
  }
  let parts = list_adder(lambda3);
  let result = list_join_comma(parts);
  let h = html_hash_symbol();
  let url = text_combine(h, result);
  return url;
}
