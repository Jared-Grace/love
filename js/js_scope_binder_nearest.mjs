import { js_scope_binder_nearest_remembered } from "./js_scope_binder_nearest_remembered.mjs";
export function js_scope_binder_nearest(stack, name) {
  "which binding a mention of this name is actually reading: the innermost scope around it that binds the name, or nothing when no scope does and the name comes from outside the file. A visitor hands the ancestors down outermost-first, so the innermost binder is the last of them.";
  ("One asking, remembering nothing past itself. The sibling taking a lookup is the one for a caller asking about every mention in a file, where the same few scopes are asked over and over; here there is nothing to ask twice, so the lookup is made and thrown away.");
  let remembered = new Map();
  let nearest = js_scope_binder_nearest_remembered(stack, name, remembered);
  return nearest;
}
