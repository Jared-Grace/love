import { list_any_starts_with_not } from "../../../love/public/src/list_any_starts_with_not.mjs";
import { each_object } from "../../../love/public/src/each_object.mjs";
import { object_adder } from "../../../love/public/src/object_adder.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { ebible_verse } from "../../../love/public/src/ebible_verse.mjs";
import { object_values_map_async } from "../../../love/public/src/object_values_map_async.mjs";
import { ebible_versions_english_full } from "../../../love/public/src/ebible_versions_english_full.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_versions_english_full_sample() {
  marker("1");
  let v = await ebible_versions_english_full();
  let excluded_prefixes = ["engweb,eng-web"];
  let filter = function lambda4(value, property) {
    let any = list_any_starts_with_not(value, excluded_prefixes);
    return any;
  };
  function lambda2(oad2) {
    function lambda3(value, property) {
      if (filter(value, property)) {
        oad2(property, value);
      }
    }
    each_object(object, lambda3);
  }
  let result3 = object_adder(lambda2);
  async function lambda(value, key) {
    log(key);
    let result2 = await ebible_verse(key, "GEN01", "1");
    return result2;
  }
  let result = await object_values_map_async(result3, lambda);
  return result;
}
