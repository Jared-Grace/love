import { text_skip } from "./text_skip.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { text_slice } from "./text_slice.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { js_parse } from "./js_parse.mjs";
export function js_code_spans_replaced(code, nodes, replacement_of) {
  "Source with a stretch of it swapped out at each of the given places, where each place is anything carrying a start and an end - a comment, a statement, a node of any kind. What goes in is decided by the caller, one place at a time.";
  "It walks forward and keeps the text between the places, rather than editing in reverse to keep the offsets valid. Both work; this one never holds a half-edited string, so there is no moment where an offset means one thing in the original and another in what has been built so far.";
  "The result is parsed before it is handed back, so a swap that produces something which is no longer JavaScript is refused loudly rather than saved. What is legal depends on where it lands - a statement cannot go between an assignment and the value being assigned - and parsing catches every such case without anyone having to think of them in advance.";
  let pieces = [];
  let cursor = 0;
  function lambda(node) {
    let start = property_get(node, "start");
    let end = property_get(node, "end");
    let before = text_slice(code, cursor, start);
    list_add(pieces, before);
    let replacement = replacement_of(node);
    list_add(pieces, replacement);
    cursor = end;
  }
  each(nodes, lambda);
  let rest = text_skip(code, cursor);
  list_add(pieces, rest);
  let replaced = text_combine_multiple(pieces);
  js_parse(replaced);
  return replaced;
}
