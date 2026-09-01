import { js_variable_box_refusals_kinds } from "./js_variable_box_refusals_kinds.mjs";
import { js_variable_box_refusals_kind_each } from "./js_variable_box_refusals_kind_each.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_equals_try } from "./property_equals_try.mjs";
import { each } from "./each.mjs";
export function js_variable_box_refusals(ast, name) {
  arguments_assert(arguments, 2);
  ("$plain name");
  ("the word a local in this file is written under, which is being considered for keeping in a record rather than in a plain local.");
  ("Every reason this name cannot be moved into a record, said in words rather than counted, and an empty list when there is none.");
  ("PUTTING A LOCAL IN A RECORD IS ONLY THE SAME CODE IF EVERY MENTION OF IT CAN BE FOUND BY ITS WORD. That is true of a plain name read and a plain name written, and it stops being true the moment the same word is bound somewhere else in the file or is changed by something other than a plain assignment. A mention that is missed is left reading a local that no longer exists, so the refusals here are what makes the move provable rather than likely.");
  ("IT ANSWERS WITH THE REASONS RATHER THAN THROWING, because a caller asking whether a name can be moved is a different question from a caller moving it, and only the second one wants the run to stop. The words are for a person: they say which shape was found, not where.");
  let refusals = [];
  function named_is(node) {
    let is = property_equals_try(node, "name", name);
    return is;
  }
  let kinds = js_variable_box_refusals_kinds(ast, named_is, refusals);
  let kind_each = js_variable_box_refusals_kind_each(ast, named_is, refusals);
  each(kinds, kind_each);
  return refusals;
}
