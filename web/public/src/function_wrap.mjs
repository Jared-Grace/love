import { function_new_transform } from "./function_new_transform.mjs";
import { function_transform } from "./function_transform.mjs";
import { marker } from "./marker.mjs";
import { function_new } from "./function_new.mjs";
export async function function_wrap(f_name, f_name_wrapped) {
  await function_new_transform(f_name_wrapped, lambda);
  async function lambda(ast) {}
}
