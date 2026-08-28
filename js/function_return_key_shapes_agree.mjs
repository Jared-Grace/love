import { arguments_assert } from "./arguments_assert.mjs";
import { function_exists_assert } from "./function_exists_assert.mjs";
import { function_return_key_shapes_disagree } from "./function_return_key_shapes_disagree.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { function_transform_auto } from "./function_transform_auto.mjs";
import { js_ast_return_key_shapes_agree } from "./js_ast_return_key_shapes_agree.mjs";
export async function function_return_key_shapes_agree(f_name) {
  "$plain f_name";
  arguments_assert(arguments, 1);
  ("Makes the named function answer with the same words whichever way it comes out, by naming in each of its records the keys the other records carry and it does not, each holding nothing.");
  ("This is the mend for what the return-shape gate names, done as one command rather than as a hand edit per missing key. Which keys are missing from which record is read off the function itself, so the edit cannot be got wrong and cannot go stale between reading the gate's list and acting on it. Widening a record by hand is also how the fault gets in in the first place: a path written from memory rather than from the record standing beside it.");
  ("The same reading is asked before and after and both come back, so what it did is visible without opening the file, and a run that changed nothing says so rather than looking like a run that worked. A function that already agreed is left exactly as it was, so running this twice is the same as running it once.");
  ("WHETHER THE DISAGREEMENT WAS MEANT IS NOT ITS JUDGMENT TO MAKE. A function answering with a value or with a refusal and never with both is answering two ways on purpose, and this would give it both words with one of them empty. So it takes one name, from somebody who has read that function, and there is deliberately no form of it that walks the repo.");
  await function_exists_assert(f_name);
  let before = await function_return_key_shapes_disagree(f_name);
  let shapes_before = [];
  let b = null_is(before);
  let disagreed = not(b);
  if (disagreed) {
    shapes_before = property_get(before, "shapes");
  }
  await function_transform_auto(f_name, js_ast_return_key_shapes_agree);
  ("Read a second time off the file rather than off the shape held in hand, because the shape in hand is the one this just wrote and would agree with itself whatever landed on the disk.");
  let after = await function_return_key_shapes_disagree(f_name);
  let shapes_after = [];
  let b2 = null_is(after);
  let disagrees = not(b2);
  if (disagrees) {
    shapes_after = property_get(after, "shapes");
  }
  let r = {
    f_name,
    shapes_before,
    shapes_after,
  };
  return r;
}
