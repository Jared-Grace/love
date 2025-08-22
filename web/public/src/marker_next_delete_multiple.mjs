import { function_rename } from "./function_rename.mjs";
import { each_async } from "./each_async.mjs";
import { marker_next_delete } from "./marker_next_delete.mjs";
import { marker } from "./marker.mjs";
export async function marker_next_delete_multiple() {
  marker("1");
  await function_rename(f_name_before, f_name_after);
  let code = null;
  async function lambda() {
    code = await marker_next_delete();
  }
  await each_async(list, lambda);
  return code;
}
