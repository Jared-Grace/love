import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { js_array_expression_only_elements } from "./js_array_expression_only_elements.mjs";
import { js_declared_names } from "./js_declared_names.mjs";
import { js_elements_calls_only_assert } from "./js_elements_calls_only_assert.mjs";
import { js_array_element_identifier_find } from "./js_array_element_identifier_find.mjs";
import { list_map } from "./list_map.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
import { list_remove } from "./list_remove.mjs";
import { function_transform_auto } from "./function_transform_auto.mjs";
export async function function_list_names_keep(f_name, names) {
  arguments_assert(arguments, 2);
  ("Takes out of the list another function hands back every name but the ones given, so a register can be cut back to a few entries in one command.");
  ("Asked for by the human 2026-10-11 as: release everything except looping lessons. The list of lessons held off latest had grown to 26, and the three to keep were fewer than the 23 to take out, so naming the ones kept is the shorter and the truer argument: it says what is left rather than what went.");
  ("Not picked: taking the names out one at a time with the verb that removes one, which is a loop of 23 commands and leaves no single command behind to name the change; and naming the 23 to remove, a list as long as the change itself.");
  ("Every name kept is looked up before anything is taken out, so a misspelt name refuses against the whole list instead of quietly keeping nothing.");
  ("It canonicalizes afterwards and commits nothing, as its twin that adds a name does, so the imports the removed names leave behind go with them.");
  let kept_names = text_split_comma(names);
  async function lambda(ast) {
    let elements = js_array_expression_only_elements(ast);
    let declared = js_declared_names(ast);
    js_elements_calls_only_assert(elements, declared);
    function find(name) {
      let found = js_array_element_identifier_find(elements, name);
      return found;
    }
    let kept = list_map(kept_names, find);
    let gone = list_without_multiple(elements, kept);
    for (let element of gone) {
      list_remove(elements, element);
    }
  }
  let output = await function_transform_auto(f_name, lambda);
  return output;
}
