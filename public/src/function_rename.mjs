import { function_alias_rename } from "./function_alias_rename.mjs";
import { function_delete } from "./function_delete.mjs";
import { function_copy } from "./function_copy.mjs";
import { marker } from "./marker.mjs";
export async function function_rename(f_name_before, f_name_after) {
  await function_copy(f_name_before, f_name_after);
  await function_delete(f_name_before);
  let v = await function_alias_rename(before, after);
  marker("1");
}
