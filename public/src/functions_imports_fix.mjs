import { functions_transform_list } from "../../../karate_code/public/src/functions_transform_list.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
import { js_imports_paths_fix_inner } from "../../../karate_code/public/src/js_imports_paths_fix_inner.mjs";
import { functions_names_to_paths } from "../../../love/public/src/functions_names_to_paths.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function functions_imports_fix() {
  marker("1");
  const list = await functions_names();
  let dictionary = await functions_names_to_paths();
  let lambda = function lambda2(ast) {
    let v2 = js_imports_paths_fix_inner(ast, dictionary);
    return v2;
  };
  let v = await functions_transform_list(lambda, list);
  return v;
}
