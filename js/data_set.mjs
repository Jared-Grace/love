import { data_transform } from "./data_transform.mjs";
export async function data_set(lambda$previous, property_name, d_path) {
  await data_transform(property_name, null, lambda$previous, d_path);
}
