import { each_range_async } from "./each_range_async.mjs";
import { marker_next_delete } from "./marker_next_delete.mjs";
import { marker } from "./marker.mjs";
export async function marker_next_delete_multiple(count) {
  marker("1");
  let code = null;
  async function lambda() {
    code = await marker_next_delete();
  }
  await each_range_async(count, lambda);
  return code;
}
