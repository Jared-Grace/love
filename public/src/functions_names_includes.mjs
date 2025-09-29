import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
export async function functions_names_includes(name) {
  let list = await functions_names();
  const valid = list_includes(list, name);
  return valid;
}
