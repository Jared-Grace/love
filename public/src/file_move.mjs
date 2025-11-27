import { marker } from "../../../love/public/src/marker.mjs";
import { function_delete } from "../../../love/public/src/function_delete.mjs";
import { function_copy } from "../../../love/public/src/function_copy.mjs";
export async function file_move(f_name_before, f_name_after) {
  marker("1");
  await function_copy(f_name_before, f_name_after);
  await function_delete(f_name_before);
}
