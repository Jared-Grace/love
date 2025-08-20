import { error_attention_set } from "./error_attention_set.mjs";
import { marker } from "./marker.mjs";
export async function error_attention_clear() {
  marker("1");
  let v = await error_attention_set("test");
  return v;
}
