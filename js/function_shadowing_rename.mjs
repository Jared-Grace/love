import { function_transform } from "./function_transform.mjs";
import { functions_names } from "./functions_names.mjs";
import { js_shadowing_rename } from "./js_shadowing_rename.mjs";
import { list_includes } from "./list_includes.mjs";
import { not_assert_json } from "./not_assert_json.mjs";
export async function function_shadowing_rename(f_name, name, name_after) {
  "clear one finding of the shadowing gate: inside this function's file, the inner binding of name becomes name_after, and only the mentions reading that binding move with it. The new name is refused if it is a repo function's name, since that would trade one kind of hiding for the other.";
  let candidates = await functions_names();
  let clash = list_includes(candidates, name_after);
  not_assert_json(clash, {
    hint: "that name belongs to a repo function, so the file would hide the function instead — would a plainer local name do?",
    name_after,
  });
  function lambda(ast) {
    js_shadowing_rename(ast, name, name_after);
  }
  let r = await function_transform(f_name, lambda);
  return r;
}
