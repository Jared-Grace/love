import { each_async } from "./each_async.mjs";
import { marker_next_delete } from "./marker_next_delete.mjs";
import { marker } from "./marker.mjs";
export async function marker_next_delete_multiple() {
  marker("1");
  let code = null;
  async function lambda(item) {
    code = await marker_next_delete();
  }
  await each_async(list, lambda);
  return v;
}
