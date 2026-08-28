import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { js_function_local_object_expression_try } from "./js_function_local_object_expression_try.mjs";
export function js_return_object_expression_try(return_node, function_node) {
  arguments_assert(arguments, 2);
  ("$plain return_node");
  ("$plain function_node");
  ("The object literal this return hands back - written out at the return itself, or standing one line above under a name - and nothing at all when the return hands back something that is not a literal object.");
  ("BOTH SHAPES ARE THE SAME SHAPE, and only one of them is written by hand. The canonicalising pass lifts a returned literal onto a name and returns the name, so a function that plainly answers with an object is left half in one form and half in the other depending on which returns the pass has been over. Reading only the literal at the return would see one arm of a choice and miss the other, which is the exact blindness this was built to close.");
  ("A return of a call, of a name that holds something else, or of nothing at all is answered with nothing. That is not a failure to look: such a return says nothing about a shape, so a caller comparing shapes has nothing to compare and must leave it out rather than count it as a difference.");
  let argument = property_get(return_node, "argument");
  if (not(argument)) {
    return null;
  }
  let kind = property_get(argument, "type");
  let literal = equal(kind, "ObjectExpression");
  if (literal) {
    return argument;
  }
  let named = equal(kind, "Identifier");
  if (not(named)) {
    return null;
  }
  let name = property_get(argument, "name");
  let r = js_function_local_object_expression_try(function_node, name);
  return r;
}
