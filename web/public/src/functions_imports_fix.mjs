import { js_imports_paths_fix_inner } from "../../../karate_code/public/src/js_imports_paths_fix_inner.mjs";
import { functions_names_to_paths } from "../../../love/public/src/functions_names_to_paths.mjs";
import { functions_transform } from "../../../love/public/src/functions_transform.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { js_imports_paths_fix } from "../../../love/public/src/js_imports_paths_fix.mjs";
export async function functions_imports_fix() {
  marker("1");
  let dictionary = await functions_names_to_paths();
  js_imports_paths_fix_inner(ast, dictionary);
  let lambda = js_imports_paths_fix;
  let v = await functions_transform(lambda);
  return v;
}
