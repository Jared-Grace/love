import { function_read } from "./function_read.mjs";
import { marker } from "./marker.mjs";
export async function apps_get() {
  marker("1");
  let v = await function_read(f_name);
}
