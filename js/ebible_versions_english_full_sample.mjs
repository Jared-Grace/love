import { ebible_versions_english_choices } from "./ebible_versions_english_choices.mjs";
import { log } from "./log.mjs";
import { ebible_verse } from "./ebible_verse.mjs";
import { object_values_map_async } from "./object_values_map_async.mjs";
export async function ebible_versions_english_full_sample() {
  let result3 = await ebible_versions_english_choices();
  async function lambda(value, key) {
    log(ebible_versions_english_full_sample.name, key);
    let result2 = await ebible_verse(key, "GEN01", "1");
    return result2;
  }
  let result = await object_values_map_async(result3, lambda);
  return result;
}
