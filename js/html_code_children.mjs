import { list_map_join_empty } from "./list_map_join_empty.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_combine } from "./text_combine.mjs";
export function html_code_children(lines, indent) {
  function lambda(line) {
    let r2 = text_combine_multiple(["\n", indent, line]);
    return r2;
  }
  let joined = list_map_join_empty(lines, lambda);
  let r = text_combine(joined, "\n");
  return r;
}
