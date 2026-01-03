import { object_values_map } from "../../../love/public/src/object_values_map.mjs";
import { ebible_versions_english_full } from "../../../love/public/src/ebible_versions_english_full.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_versions_english_full_sample() {
  marker("1");
  let v = await ebible_versions_english_full();
  function lambda(value, key) {}
  let result = object_values_map(object, lambda);
  return v;
}
