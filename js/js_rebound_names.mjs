import { arguments_assert } from "./arguments_assert.mjs";
import { js_assigned_names_generic } from "./js_assigned_names_generic.mjs";
import { js_target_names_rebound } from "./js_target_names_rebound.mjs";
export function js_rebound_names(node) {
  arguments_assert(arguments, 1);
  ("Every name inside this piece of code that is pointed somewhere else - a plain write or a step up or down, and never a write that goes through a dot or a bracket.");
  ("The reading to ask wherever a name is about to be handed from one place to another as a value, which is what a cut does with every name it carries in and every name it hands back. Pointing a name somewhere else splits it in two; changing the thing it points at does not, because both holders are looking at the one thing.");
  ("Its broader twin gathers every name written anywhere in the written-to place, dots and all. That one is for a caller asking whether something could have changed at all, and being told yes too often only makes it careful. Here it would make a cut refuse itself.");
  let names = js_assigned_names_generic(node, js_target_names_rebound);
  return names;
}
