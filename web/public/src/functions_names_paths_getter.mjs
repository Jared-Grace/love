import { property_get_curried } from "../../../love/public/src/property_get_curried.mjs";
import { functions_names_paths } from "../../../love/public/src/functions_names_paths.mjs";
export async function functions_names_paths_getter() {
  let r = await functions_names_paths();
  let r2 = property_get_curried(r);
  return r2;
}
