import { html_hash_symbol } from "../../../love/public/src/html_hash_symbol.mjs";
import { list_join_comma } from "../../../love/public/src/list_join_comma.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { each_object } from "../../../love/public/src/each_object.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function hash_to_url(hash) {
  function lambda3(la) {
    function lambda(value, property) {
      let part = text_combine_multiple([property, "=", value]);
      la(part);
    }
    each_object(hash, lambda);
  }
  let parts = list_adder(lambda3);
  let result2 = list_join_comma(parts);
  let h = html_hash_symbol();
  const url = text_combine(h, result2);
  return url;
}
