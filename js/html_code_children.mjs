import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_combine } from "./text_combine.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { list_map } from "./list_map.mjs";
export function html_code_children(lines, indent) {
  function lambda(line) {
    let r = text_combine_multiple(["\n", indent, line]);
    return r;
  }
  let mapped = list_map(lines, lambda);
  let joined = list_join_empty(mapped);
  let r = text_combine(joined, "\n");
  return r;
}
