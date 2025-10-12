import { function_alias_add } from "../../../love/public/src/function_alias_add.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_alias_add_auto(first, second) {
  marker("1");
  let v = await function_alias_add(first, second);
  return v;
}
