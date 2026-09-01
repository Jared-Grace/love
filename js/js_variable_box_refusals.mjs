import { js_variable_box_refusals_update_each } from "./js_variable_box_refusals_update_each.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_equals_try } from "./property_equals_try.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
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
  let r = js_variable_box_refusals_update_each(ast, named_is, refusals);
  let update_each = property_get(r, "update_each");
  let updates = property_get(r, "updates");
  each(updates, update_each);
  let kinds = [
    "FunctionDeclaration",
    "FunctionExpression",
    "ArrowFunctionExpression",
  ];
  function kind_each(kind) {
    let holders = js_list_type_nodes(ast, kind);
    function holder_each(holder) {
      let params = property_get(holder, "params");
      function param_each(param) {
        let is = named_is(param);
        if (is) {
          list_add(refusals, "a function inside takes the same word in");
        }
      }
      each(params, param_each);
      let id = property_get(holder, "id");
      let same = named_is(id);
      if (same) {
        list_add(refusals, "a function inside answers to the same word");
      }
    }
    each(holders, holder_each);
  }
  each(kinds, kind_each);
  return refusals;
}
