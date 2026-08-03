import { not_equal } from "./not_equal.mjs";
import { property_list_get_end_1 } from "./property_list_get_end_1.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { property_get } from "./property_get.mjs";
import { js_identifier_not_is } from "./js_identifier_not_is.mjs";
import { js_identifiers_named_count } from "./js_identifiers_named_count.mjs";
import { null_is } from "./null_is.mjs";
import { list_not_is } from "./list_not_is.mjs";
import { list_remove } from "./list_remove.mjs";
export function js_function_declaration_unused_remove(ast) {
  "Takes out a function written inside another one that nothing anywhere calls.";
  "Its neighbour does this for a name bound to a value and stops at a name bound to a function, so a dead helper is the one shape the clearing could never reach. Three of them were left standing when two hundred and thirty six other unread names had been cleared, and each one had to be read by a person to find out that the answer was yes, take it out.";
  "Nothing is removed unless the name is written down exactly once in the whole function, and that one writing is the declaration itself. A helper that calls itself is written twice and stays; a helper called anywhere is written twice and stays. So this can only ever remove something that no line reaches, which is why it changes nothing about how the function runs.";
  "A function declaration does no work by being there - it is hoisted, and until it is called it has run nothing. That is what makes taking it out different from taking out a bound line, where the value on the right may have done something on its way to being dropped.";
  "The outermost function is safe by the same step that finds the enclosing list: the thing being walked is the function itself, so it has nothing above it and is left where it is.";
  function lambda(v) {
    let node = property_get(v, "node");
    let id = property_get(node, "id");
    if (null_is(id)) {
      return;
    }
    let nti = js_identifier_not_is(id);
    if (nti) {
      return;
    }
    let name = property_get(id, "name");
    let count = js_identifiers_named_count(ast, name);
    if (not_equal(count, 1)) {
      return;
    }
    let e = property_list_get_end_1(v, "stack");
    let nl = list_not_is(e);
    if (nl) {
      return;
    }
    list_remove(e, node);
  }
  js_visit_type(ast, "FunctionDeclaration", lambda);
}
