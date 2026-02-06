import { js_imports_fix } from "../../../love/public/src/js_imports_fix.mjs";
import { functions_transform } from "../../../love/public/src/functions_transform.mjs";
export async function functions_imports_fix() {
  let lambda = js_imports_fix;
  let v = await functions_transform(lambda);
  return v;
}
