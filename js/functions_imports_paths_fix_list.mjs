import { functions_transform_list } from "./functions_transform_list.mjs";
import { js_imports_paths_fix_inner } from "./js_imports_paths_fix_inner.mjs";
import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
export async function functions_imports_paths_fix_list(list) {
  let dictionary = await functions_names_to_paths();
  let lambda = function lambda2(ast) {
    let v2 = js_imports_paths_fix_inner(ast, dictionary);
    return v2;
  };
  let v = await functions_transform_list(list, lambda);
  return v;
}
