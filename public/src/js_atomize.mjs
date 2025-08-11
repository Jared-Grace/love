import { js_stack_last } from "./js_stack_last.mjs";
import { object_copy } from "./object_copy.mjs";
import { js_identifier_unique } from "./js_identifier_unique.mjs";
import { js_identifiers } from "./js_identifiers.mjs";
import { list_get_end } from "./list_get_end.mjs";
import { each } from "./each.mjs";
import { js_type } from "./js_type.mjs";
import { js_visit } from "./js_visit.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { list_get } from "./list_get.mjs";
import { log } from "./log.mjs";
import { marker } from "./marker.mjs";
import { list_is } from "./list_is.mjs";
import { list_filter } from "./list_filter.mjs";
export function js_atomize(ast) {
  marker();
  let existing = js_identifiers(ast);
  js_visit_type(ast, "CallExpression", (v) => {
    let { node } = v;
    let { stack } = v;
    const stack1 = list_get_end(stack, 1);
    if (list_is(stack1)) {
      let unique = js_identifier_unique(existing, "v");
      let copy = object_copy(node);
      let last = js_stack_last(stack, "BlockStatement");
      let { body } = last;
    }
  });
}
