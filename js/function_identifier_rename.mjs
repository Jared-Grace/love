import { function_transform } from "./function_transform.mjs";
import { js_identifier_rename_curried_right_2 } from "./js_identifier_rename_curried_right_2.mjs";
export async function function_identifier_rename(f_name, name_from, name_to) {
  "rename a binding that belongs to one named function - a parameter, or a local - across that function's own file, mentions and all. The sibling that ends a hiding refuses this: it looks for the one scope where the name is hidden and finds none, so a parameter that shadows nothing has had no verb until now and was reached for by hand. The other sibling already does exactly this work but only on whatever the editor is showing, which is nothing at all from a command line";
  let lambda = js_identifier_rename_curried_right_2(name_from, name_to);
  let renamed = await function_transform(f_name, lambda);
  return renamed;
}
