import { functions_transform } from "./functions_transform.mjs";
import { marker } from "./marker.mjs";
import { js_imports_paths_fix } from "./js_imports_paths_fix.mjs";
export async function functions_imports_fix() {
  marker("1");
  let lambda = js_imports_paths_fix;
  let v = await functions_transform(lambda);
  return v;
}
