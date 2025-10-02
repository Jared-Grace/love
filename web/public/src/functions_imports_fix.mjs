import { js_imports_paths_fix_inner } from "../../../karate_code/public/src/js_imports_paths_fix_inner.mjs";
import { functions_names_to_paths } from "../../../love/public/src/functions_names_to_paths.mjs";
import { functions_transform } from "../../../love/public/src/functions_transform.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function functions_imports_fix() {
  marker("1");
  let dictionary = await functions_names_to_paths();
  let lambda = function lambda2(ast) {
    let v2 = js_imports_paths_fix_inner(ast, dictionary);
    return v2;
  };
  let v = await functions_transform(lambda);
  return v;
}
