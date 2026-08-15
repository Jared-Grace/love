import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_map } from "./list_map.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { js_function_nested_lift_reading } from "./js_function_nested_lift_reading.mjs";
import { js_identifiers_named } from "./js_identifiers_named.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
export async function js_function_lift_wrapper_refusals(ast, declaration) {
  arguments_assert(arguments, 2);
  ("Every reason there is not to move this function's body out and leave its name behind holding one line that calls it. Empty means there is none.");
  ("One judgement, asked by two askers. The move asks it to decide whether to go ahead or say why not; the report of what could be moved asks the same question of every function written inside another one, without moving anything. Two copies of this would drift, and the drift would show up as a report promising a move that then refuses - the worst kind of list, because acting on it costs a whole command to learn it was wrong.");
  ("Nothing here is a fault. Each one is a shape this move cannot keep the meaning of, and each says what somebody could do first to make it one that can.");
  let refusals = [];
  let reading = await js_function_nested_lift_reading(ast, declaration);
  let name_old = property_get(reading, "name_old");
  let written_closed = property_get(reading, "written_closed");
  let written_is = list_empty_not_is(written_closed);
  if (written_is) {
    list_add(refusals, {
      why: "this function writes to a name it reached out for, and a parameter would only be a copy of it, so the write would stop reaching the line waiting to read it. Would you like it to hand the new value back instead?",
      written_closed,
    });
  }
  ("Asked of the body alone rather than of the whole function, because a name is written once at the head of every function and a reading that counted that would call every one of them a function that calls itself.");
  let block = property_get(declaration, "body");
  let itself = js_identifiers_named(block, name_old);
  let itself_is = list_empty_not_is(itself);
  if (itself_is) {
    list_add(refusals, {
      why: "this function calls itself, and the name it calls itself by would be left behind on the line that calls the moved body, where the moved body cannot see it. Would you like to hand it in as one more thing it is given?",
    });
  }
  let params = property_get(declaration, "params");
  let param_names = list_map(params, js_identifier_name_try);
  let pattern_is = list_includes(param_names, null);
  if (pattern_is) {
    list_add(refusals, {
      why: "one of this function's parameters pulls a value apart rather than naming it, and the line left behind has to spell every parameter out to pass it on. Would you like to give that parameter a plain name first?",
    });
  }
  return refusals;
}
