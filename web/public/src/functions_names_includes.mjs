import { list_includes } from "./list_includes.mjs";
import { functions_names } from "./functions_names.mjs";
export async function functions_names_includes(name) {
  let list = await functions_names();
  const valid = list_includes(list, name);
  return valid;
}
