import { function_declaration_overwrite } from "./function_declaration_overwrite.mjs";
import { function_unalias_exists_not_assert_json } from "./function_unalias_exists_not_assert_json.mjs";
import { js_function_declaration_name } from "./js_function_declaration_name.mjs";
export async function function_new_declaration_from(declaration) {
  let f_name = js_function_declaration_name(declaration);
  await function_unalias_exists_not_assert_json(f_name, {
    hint: "a function with this name shouldn't already exist before creating it fresh — is it already defined?",
  });
  await function_declaration_overwrite(declaration, f_name);
}
