import { function_transform } from "./function_transform.mjs";
import { functions_names } from "./functions_names.mjs";
import { js_shadowing_rename_in } from "./js_shadowing_rename_in.mjs";
import { list_includes } from "./list_includes.mjs";
import { not_assert_json } from "./not_assert_json.mjs";
export async function function_shadowing_rename_in(
  f_name,
  scope_name,
  name,
  name_after,
) {
  "clear one finding of the shadowing gate in a file the single rename refuses because it hides the same word in more than one place: inside the function named scope_name, that binding of name becomes name_after, and only the mentions reading it move with it.";
  "One command per binding, so a file hiding a word twice takes two runs with two replacements - which is the point, since the two bindings usually want different words and a sweep choosing one word for both would name at least one of them wrongly.";
  "The new name is refused if it is a repo function's name, since that would trade one kind of hiding for the other.";
  let candidates = await functions_names();
  let clash = list_includes(candidates, name_after);
  not_assert_json(clash, {
    hint: "that name belongs to a repo function, so the file would hide the function instead — would a plainer local name do?",
    name_after,
  });
  function lambda(ast) {
    js_shadowing_rename_in(ast, scope_name, name, name_after);
  }
  let r = await function_transform(f_name, lambda);
  return r;
}
