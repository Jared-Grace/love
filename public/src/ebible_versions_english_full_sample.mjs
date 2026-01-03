import { ebible_versions_english_choices } from "../../../love/public/src/ebible_versions_english_choices.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { ebible_verse } from "../../../love/public/src/ebible_verse.mjs";
import { object_values_map_async } from "../../../love/public/src/object_values_map_async.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_versions_english_full_sample() {
  marker("1");
  let result3 = await ebible_versions_english_choices();
  async function lambda(value, key) {
    log(key);
    let result2 = await ebible_verse(key, "GEN01", "1");
    return result2;
  }
  let result = await object_values_map_async(result3, lambda);
  return result;
}
