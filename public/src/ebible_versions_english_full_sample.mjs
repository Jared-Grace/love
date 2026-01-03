import { object_values_map_async } from "../../../love/public/src/object_values_map_async.mjs";
import { ebible_versions_english_full } from "../../../love/public/src/ebible_versions_english_full.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_versions_english_full_sample() {
  marker("1");
  let v = await ebible_versions_english_full();
  let result = await object_values_map_async(
    object,
    async function lambda(value, key) {},
  );
  return v;
}
