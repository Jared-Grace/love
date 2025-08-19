import { data_transform } from "./data_transform.mjs";
export async function error_attention_set(value) {
  async function lambda3(previous) {
    return value;
  }
  let value2 = await data_transform("error_attention", null, lambda3);
}
