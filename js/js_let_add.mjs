import { property_list_get_end_1 } from "./property_list_get_end_1.mjs";
import { js_identifier_defineds_includes } from "./js_identifier_defineds_includes.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { not } from "./not.mjs";
import { object_replace } from "./object_replace.mjs";
import { property_get } from "./property_get.mjs";
import { js_declare } from "./js_declare.mjs";
import { js_expression_statement_is } from "./js_expression_statement_is.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
export function js_let_add(ast) {
  "Gives the word let to every assignment in this tree that writes to a name nothing has bound.";
  "The word makes a name of its own, held inside the nearest pair of brackets. So it belongs only where the name is bound nowhere the assignment can see. Put beside a name something already binds, it makes a second name that hides the first, and every line below reads a value nobody wrote there. The cases in js_let_add_cases say which assignments are given the word and which are left alone.";
  function assignment_declare(v) {
    ("The word can only stand in front of a whole statement. An assignment written");
    ("anywhere else - handed over as an argument, or sitting inside a larger sum -");
    ("is a part of something else, and there is no place in front of it for the word");
    ("to go.");
    let statement = property_list_get_end_1(v, "stack");
    let statement_is = js_expression_statement_is(statement);
    if (not(statement_is)) {
      return;
    }
    let node = property_get(v, "node");
    let left = property_get(node, "left");
    ("A property of something is a name reached through another name, and the word");
    ("declares plain names only.");
    let name_is = js_identifier_is(left);
    if (not(name_is)) {
      return;
    }
    let name = property_get(left, "name");
    let bound_is = js_identifier_defineds_includes(v, name);
    if (bound_is) {
      return;
    }
    let right = property_get(node, "right");
    let declaration = js_declare(name, right);
    object_replace(statement, declaration);
  }
  js_visit_type(ast, "AssignmentExpression", assignment_declare);
}
