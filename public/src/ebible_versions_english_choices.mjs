import { object_properties } from "../../../love/public/src/object_properties.mjs";
import { object_filter } from "../../../love/public/src/object_filter.mjs";
import { list_any_starts_with_not } from "../../../love/public/src/list_any_starts_with_not.mjs";
import { ebible_versions_english_full } from "../../../love/public/src/ebible_versions_english_full.mjs";
export async function ebible_versions_english_choices() {
  let object = await ebible_versions_english_full();
  let properties = object_properties(obj);
  let excluded_prefixes = ["engweb", "eng-web"];
  let filter = function lambda4(value, property) {
    let any = list_any_starts_with_not(property, excluded_prefixes);
    return any;
  };
  let result3 = object_filter(object, filter);
  return result3;
}
