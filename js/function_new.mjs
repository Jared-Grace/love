import { function_new_declaration_from } from "./function_new_declaration_from.mjs";
import { function_new_declaration_to } from "./function_new_declaration_to.mjs";
export async function function_new(f_name) {
  let declaration = function_new_declaration_to(f_name);
  await function_new_declaration_from(declaration);
  return declaration;
}
