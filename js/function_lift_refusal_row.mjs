import { arguments_assert } from "./arguments_assert.mjs";
import { js_function_declaration_name } from "./js_function_declaration_name.mjs";
import { js_function_declaration_statements_deep } from "./js_function_declaration_statements_deep.mjs";
import { list_size } from "./list_size.mjs";
import { js_function_lift_wrapper_refusals } from "./js_function_lift_wrapper_refusals.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { lift_candidate_size_least } from "./lift_candidate_size_least.mjs";
import { less_than } from "./less_than.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
export async function function_lift_refusal_row(ast, declaration) {
  arguments_assert(arguments, 2);
  ("One function written inside another one, with every reason it is still written there rather than standing on its own: what the move turned it down for, and whether it is too small for the move to have been offered at all.");
  ("Both answers in one row, because the question being asked is why a closure outlasted a walk that ran to a standstill, and there are exactly two ways to outlast one. They are kept apart rather than added together: a shape the move cannot keep the meaning of is a real exception, and worth looking for a category in, while a shape nobody bothered with is only small.");
  ("A row that would carry no reason at all says so in a word of its own instead of carrying nothing. After a walk has stopped there should be none, so this is the reading's own alarm - and a word counts where an empty list would have to be looked for.");
  ("The other move's reasons are carried on the same row rather than on a walk of their own. The two moves answer for the same closures, and the whole use of this row is to ask what a shape one move cannot take would take instead - which a second walk could only answer by reading every one of these files a second time to say something about the ones already in front of it.");
  let name = js_function_declaration_name(declaration);
  let deep = js_function_declaration_statements_deep(declaration);
  let size = list_size(deep);
  let refusals = await js_function_lift_wrapper_refusals(ast, declaration);
  let reasons = list_map_property(refusals, "reason");
  let least = lift_candidate_size_least();
  let small_is = less_than(size, least);
  if (small_is) {
    list_add(reasons, "small");
  }
  let none_is = list_empty_is(reasons);
  if (none_is) {
    list_add(reasons, "movable");
  }
  let handback_refusals = await js_function_handback_refusals(ast, declaration);
  let handback = list_map_property(handback_refusals, "reason");
  let row = {
    name,
    size,
    reasons,
    handback,
  };
  return row;
}
