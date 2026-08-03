import { address_key_doors_callers } from "./address_key_doors_callers.mjs";
import { property_get } from "./property_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { null_is } from "./null_is.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_call_argument_forwarded_name_try } from "./js_call_argument_forwarded_name_try.mjs";
import { js_flo_params_get } from "./js_flo_params_get.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { not } from "./not.mjs";
export async function address_key_doors_wrapped() {
  "Every function that is a door onto the address of a page without being written down as one - a function handing a parameter of its own where the name of a field goes. Both halves of an address, the part after the hash and the part after the question mark. Read-only.";
  "A word written at a call to such a function is as published as one written at the door itself, and no reading of published address words would ever reach it, because they all look at calls to the doors that are written down. So an empty answer is what says the written-down set is still the whole set.";
  "The field stands first in every door there is today, so one place is asked of all of them. That holds only while it is true, and the list they come from says so at the point where a fourth would be added.";
  "A word held in a local rather than a parameter is not this. Set from a call, it is the repaired shape - the word is held by a function, and whether that function is frozen is a different question. Set from a word written out, it is caught where words written out are caught.";
  "One step in, not two. A parameter of a function nested inside this one is filled from this same file, so it publishes nothing on its own; it would only matter if that inner function were handed out to be called elsewhere, and there is none doing this today.";
  arguments_assert(arguments, 0);
  let pairs = await address_key_doors_callers();
  let place = "1";
  let wrapped = [];
  for (let pair of pairs) {
    let name = property_get(pair, "caller");
    let door = property_get(pair, "door");
    let tree = await function_ast(name);
    let only = [door];
    let variable = js_call_argument_forwarded_name_try(tree, only, place);
    let written_here = null_is(variable);
    if (written_here) {
      continue;
    }
    let params = js_flo_params_get(tree);
    let param_names = list_map_property(params, "name");
    let given = list_includes(param_names, variable);
    if (not(given)) {
      continue;
    }
    let sentence = text_combine_multiple([
      name,
      " -> ",
      door,
      " is handed ",
      variable,
      ", which its own callers fill",
    ]);
    list_add(wrapped, sentence);
  }
  wrapped.sort();
  return wrapped;
}
