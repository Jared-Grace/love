import { data_path } from "./data_path.mjs";
import { data_transform } from "./data_transform.mjs";
export async function error_attention_set(value) {
  async function lambda(previous) {
    return value;
  }
  let d_path = data_path();
  await data_transform("error_attention", null, lambda, d_path);
}
