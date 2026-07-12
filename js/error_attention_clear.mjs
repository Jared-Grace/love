import { error_attention_set } from "./error_attention_set.mjs";
export async function error_attention_clear() {
  let v = await error_attention_set(null);
  return v;
}
