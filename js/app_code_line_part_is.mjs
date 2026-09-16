import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse_try } from "./js_parse_try.mjs";
import { null_is } from "./null_is.mjs";
import { text_trim } from "./text_trim.mjs";
import { property_get } from "./property_get.mjs";
import { text_slice } from "./text_slice.mjs";
import { equal } from "./equal.mjs";
import { js_visit } from "./js_visit.mjs";
export function app_code_line_part_is(whole, part) {
  arguments_assert(arguments, 2);
  ("Whether one piece of code is, word for word, a piece standing inside another - 1 * 6 inside 6 + 1 * 6.");
  ("The pieces are the ones the parser finds, not any run of letters that happens to match, so a piece is a piece of the line's own making. The whole line counts as a piece of itself, which is the cautious answer wherever two sides are the same.");
  ("This is what tells a lesson asking which part is worked out first from one matching two ways of writing the same thing. The first answers with a part of what it showed; the second answers with a rewriting of the whole of it.");
  let ast = js_parse_try(whole);
  let unread = null_is(ast);
  if (unread) {
    return false;
  }
  let wanted = text_trim(part);
  let found = false;
  function on_visit(v) {
    "one piece of the line, answered for if it is written exactly as the piece being looked for";
    let node = property_get(v, "node");
    let from = property_get(node, "start");
    let to = property_get(node, "end");
    let written = text_slice(whole, from, to);
    let same = equal(written, wanted);
    if (same) {
      found = true;
    }
  }
  js_visit(ast, on_visit);
  return found;
}
