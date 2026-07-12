import { functions_transform } from "./functions_transform.mjs";
import { js_return_above_combine } from "./js_return_above_combine.mjs";
export async function functions_return_above_find() {
  let waited = await functions_transform(js_return_above_combine);
}
