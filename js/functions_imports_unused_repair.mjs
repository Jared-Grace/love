import { arguments_assert } from "./arguments_assert.mjs";
import { function_transform } from "./function_transform.mjs";
import { js_imports_unused_remove } from "./js_imports_unused_remove.mjs";
export async function functions_imports_unused_repair(f_names) {
  arguments_assert(arguments, 1);
  ("Takes out the imports that are no longer used, in the functions named.");
  ("The set is given rather than found because the commonest time to want this is right after a run has been collapsed into a helper, and by then the files may already have been committed by somebody else's sweep - so the question is not which files are being edited but which files the collapse touched, and only the one who made it knows that.");
  ("Names are one comma-joined word, the shape every list takes at this seam.");
  ("Nothing is committed here. What made the imports unused was a change of somebody's own, and it is that change the commit belongs to.");
  let output = await function_transform(f_names, js_imports_unused_remove);
  return output;
}
