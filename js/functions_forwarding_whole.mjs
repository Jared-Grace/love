import { functions_names } from "./functions_names.mjs";
import { function_parse_strict_declaration } from "./function_parse_strict_declaration.mjs";
import { js_function_forwarding_target } from "./js_function_forwarding_target.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { list_map_limited_async } from "./list_map_limited_async.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
export async function functions_forwarding_whole() {
  "Every repo function that is, in whole, a second name for another function, given under its own name with the name it hands over to.";
  "The dropping sweep leaves these alone and always will. It drops a function only where the name is handed over as an argument in the same file, and a function of its own is handed over from everywhere, so what the callers do with it cannot be read. A second name may be worth keeping and may be worth merging away, and that is a judgement about what the two names are for rather than a reading of the code.";
  "A name whose source cannot be read or parsed is left out rather than thrown on.";
  let names = await functions_names();
  async function forwarded(f_name) {
    async function lambda() {
      let parsed = await function_parse_strict_declaration(f_name);
      let declaration = property_get(parsed, "declaration");
      let target = js_function_forwarding_target(declaration);
      if (equal(target, null)) {
        return null;
      }
      let pair = {
        key: f_name,
        value: target,
      };
      return pair;
    }
    let r = await catch_null_async(lambda);
    return r;
  }
  let answers = await list_map_limited_async(names, forwarded, 20);
  let pairs = list_filter_null_not_is(answers);
  let found = {};
  for (let pair of pairs) {
    let key = property_get(pair, "key");
    let value = property_get(pair, "value");
    property_set(found, key, value);
  }
  return found;
}
