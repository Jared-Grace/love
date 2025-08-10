import { js_imports_missing_add } from "./js_imports_missing_add.mjs";
import { function_transform } from "./function_transform.mjs";
import { marker } from "./marker.mjs";
import { each } from "./each.mjs";
export async function function_auto() {
  marker();
  await function_transform(f_name, (ast) => {
    let transforms = [js_imports_missing_add];
    each(transforms, (t) => t(ast));
  });
}
