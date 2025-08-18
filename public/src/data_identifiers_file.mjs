import { data_transform } from "./data_transform.mjs";
import { marker } from "./marker.mjs";
export async function data_identifiers_file(
  property_name,
  value_initial,
  lambda$previous,
) {
  marker("1");
  let v = await data_transform(property_name, value_initial, lambda$previous);
  return v;
}
