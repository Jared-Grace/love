import { function_transform } from "./function_transform.mjs";
import { function_name_unalias_only } from "./function_name_unalias_only.mjs";
import { js_function_forwarding_remove } from "./js_function_forwarding_remove.mjs";
export async function function_forwarding_remove(f_name) {
  "Drops every function inside this one that is only a second name for another one, hands the other one over in its stead, and writes the file back.";
  "Hands back the function as it now stands, which is the evidence of what was dropped. A command that changes a file and shows nothing leaves the caller nothing to do but ask again.";
  let unaliased = await function_name_unalias_only(f_name);
  let output = await function_transform(
    unaliased,
    js_function_forwarding_remove,
  );
  return output;
}
