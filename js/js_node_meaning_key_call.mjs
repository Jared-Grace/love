import { js_code_call_commutative } from "./js_code_call_commutative.mjs";
import { js_node_meaning_key } from "./js_node_meaning_key.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_join } from "./list_join.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { property_get } from "./property_get.mjs";
import { property_list_map } from "./property_list_map.mjs";
export function js_node_meaning_key_call(node) {
  "What a call says, once everything handed to it has been asked what it says. A few calls do not mind which way round they receive what they are given - the smaller of two is the smaller of two either way about - and those have what they receive put in a settled order, so that the two ways of writing one come out as one.";
  "Every other call keeps the order it was written in, because for most of them the order is the whole of what was said.";
  let callee = property_get(node, "callee");
  let name = js_unparse(callee);
  let keys = property_list_map(node, "arguments", js_node_meaning_key);
  let commutative_calls = js_code_call_commutative();
  let swappable = list_includes(commutative_calls, name);
  if (swappable) {
    list_sort_text(keys);
  }
  let written = list_join(keys, ",");
  let pieces = [name, "(", written, ")"];
  let key = list_join(pieces, "");
  return key;
}
