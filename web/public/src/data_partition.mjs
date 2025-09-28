import { data_copy } from "./data_copy.mjs";
import { marker } from "./marker.mjs";
export async function data_partition(property_name) {
  marker("1");
  await data_copy(property_name);
}
