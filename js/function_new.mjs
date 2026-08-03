import { function_new_declaration_from } from "./function_new_declaration_from.mjs";
import { function_new_declaration_to } from "./function_new_declaration_to.mjs";
export async function function_new(f_name) {
  "Makes the file for a function that does not exist yet, holding its name and an empty body, so the work has a real place to be written into.";
  let declaration = function_new_declaration_to(f_name);
  await function_new_declaration_from(declaration);
  return declaration;
}
