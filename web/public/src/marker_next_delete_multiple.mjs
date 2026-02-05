import { each_range_async } from "../../../love/public/src/each_range_async.mjs";
import { marker_next_delete } from "../../../love/public/src/marker_next_delete.mjs";
export async function marker_next_delete_multiple(count) {
  let code = null;
  async function lambda() {
    code = await marker_next_delete();
  }
  await each_range_async(count, lambda);
  return code;
}
