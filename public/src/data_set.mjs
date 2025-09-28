import { marker } from "./marker.mjs";
import { data_path } from "./data_path.mjs";
import { data_transform } from "./data_transform.mjs";
export async function data_set(lambda$previous, property_name) {
  marker("1");
  function lambda(previous) {
    let v2 = lambda$previous(previous);
    return v2;
  }
  let dp = data_path();
  await data_transform(property_name, null, lambda, dp);
}
