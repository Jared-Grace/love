import { function_transform } from "./function_transform.mjs";
import { marker } from "./marker.mjs";
export async function function_auto() {
  marker();
  await function_transform(f_name, (ast) => {});
}
