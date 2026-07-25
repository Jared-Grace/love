import { property_get } from "./property_get.mjs";
import { function_new_transform } from "./function_new_transform.mjs";
import { function_open } from "./function_open.mjs";
export async function function_new_open_transform(f_name, lambda$ast) {
  "The new fn is shown to the human once the transform has shaped it, so what lands on screen is the finished file rather than an empty one";
  let r = await function_new_transform(f_name, lambda$ast);
  await function_open(f_name);
  let output = property_get(r, "output");
  return output;
}
