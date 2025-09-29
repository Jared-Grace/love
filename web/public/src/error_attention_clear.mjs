import { error_attention_set } from "../../../love/public/src/error_attention_set.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function error_attention_clear() {
  marker("1");
  let v = await error_attention_set(null);
  return v;
}
