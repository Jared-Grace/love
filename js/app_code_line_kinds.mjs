import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse_try } from "./js_parse_try.mjs";
import { null_is } from "./null_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { not } from "./not.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { js_literal_text_is } from "./js_literal_text_is.mjs";
import { js_literal_boolean_is } from "./js_literal_boolean_is.mjs";
import { js_visit } from "./js_visit.mjs";
export function app_code_line_kinds(code) {
  arguments_assert(arguments, 1);
  ("Every kind of thing written on one line of code, named once each: the sort of each piece, the sign carried by each operator, and whether a value written out is writing or a yes-or-no.");
  ("What a learner meets on a line is not only how much working out it asks for but what is on it that they have never seen. A first console.log carries one call and no operators at all, and it is the hardest line in the course on the day it arrives.");
  ("The signs are kept apart from the sorts because two lines of the same sort are not the same lesson - a plus and a percent are both one operator standing on one line, and meeting the second teaches something meeting the first did not.");
  ("Text that does not read as code has no kinds, which is nothing rather than none: a word like TheWorld is not a line and nothing should be concluded from it.");
  let kinds = [];
  let ast = js_parse_try(code);
  let unread = null_is(ast);
  if (unread) {
    return kinds;
  }
  function keep(kind) {
    "this kind of thing, if it is not already down";
    let already = list_includes(kinds, kind);
    if (already) {
      return;
    }
    list_add(kinds, kind);
  }
  function on_visit(v) {
    "one piece of the line, with its sort, its sign and the sort of value it writes taken down";
    let node = property_get(v, "node");
    let node_is = js_node_is(node);
    if (not(node_is)) {
      return;
    }
    let type = js_node_type(node);
    keep(type);
    let operator = property_get_or_null(node, "operator");
    let signed = null_is(operator);
    if (not(signed)) {
      let combined = text_combine_multiple([type, " ", operator]);
      keep(combined);
    }
    let writing_is = js_literal_text_is(node);
    if (writing_is) {
      keep("Literal writing");
    }
    let yes_no_is = js_literal_boolean_is(node);
    if (yes_no_is) {
      keep("Literal yes or no");
    }
  }
  js_visit(ast, on_visit);
  return kinds;
}
