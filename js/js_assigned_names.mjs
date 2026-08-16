import { arguments_assert } from "./arguments_assert.mjs";
import { js_assigned_names_generic } from "./js_assigned_names_generic.mjs";
import { js_target_names_all } from "./js_target_names_all.mjs";
export function js_assigned_names(node) {
  arguments_assert(arguments, 1);
  ("Every name written to anywhere inside this piece of code");
  ("Written means assigned or stepped up and down - the two ways a name already standing can be given a different value. Declaring a fresh name is not writing to one, so it is not counted here.");
  ("The names are read off the whole of the target, so a write through a dot offers the word after the dot as well as the one before it. That gathers more names than were really written, on purpose: a caller reading this way asks whether a name it cares about could have changed, and answering yes too often only makes that caller more careful, while answering no too often would make it wrong.");
  ("Its narrower twin counts only the names actually pointed somewhere else. That is the one to ask wherever a name is handed on as a value, because a write through a dot cannot split a name in two and refusing it there costs good work for nothing.");
  let names = js_assigned_names_generic(node, js_target_names_all);
  return names;
}
