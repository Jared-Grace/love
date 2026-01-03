import { html_hash_symbol } from "../../../love/public/src/html_hash_symbol.mjs";
import { list_join_comma } from "../../../love/public/src/list_join_comma.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { each_object } from "../../../love/public/src/each_object.mjs";
export function hash_to_url(hash) {
  function lambda3(la) {
    function lambda(value, property) {
      let part = property + "=" + value;
      la(part);
    }
    each_object(hash, lambda);
  }
  let parts = list_adder(lambda3);
  let result2 = list_join_comma(parts);
  let h = html_hash_symbol();
  const h2 = h + result2;
  return h2;
}
