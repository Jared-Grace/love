import { each_async } from "../../../love/public/src/each_async.mjs";
import { function_rename_replace } from "../../../love/public/src/function_rename_replace.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function functions_rename_replace() {
  marker("1");
  await each_async(list, async function lambda(item) {});
  let v = await function_rename_replace(f_name_before, from, to);
}
