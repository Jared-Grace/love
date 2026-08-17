import { arguments_assert } from "./arguments_assert.mjs";
import { function_nested_lift_or_wrapper } from "./function_nested_lift_or_wrapper.mjs";
export async function function_nested_lift_or_wrapper_run(
  f_name,
  nested_name,
  f_name_new,
) {
  arguments_assert(arguments, 3);
  ("Move a function written inside the named one out under a name of its own, by whichever of the two moves that one will go by - taking its name with it where every use of the name is a call, and leaving the name behind on a line otherwise.");
  ("The choosing already had a name and the making of the move did not, so every caller wanting both wrote the same two lines: ask which, then run what came back. Two lines is little, but a walk that makes a move per row cannot be handed a choice - it has to be handed something with the same shape as the two moves it stands in for, three names in and a move made.");
  ("So this is the third member of a family of three, and the one to hand to anything that walks. The other two stay reachable by name for a reader who has already decided which move a particular shape wants.");
  let lift = await function_nested_lift_or_wrapper(f_name, nested_name);
  let output = await lift(f_name, nested_name, f_name_new);
  return output;
}
