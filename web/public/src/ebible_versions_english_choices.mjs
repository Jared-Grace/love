import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { properties_get } from "../../../love/public/src/properties_get.mjs";
import { list_any_starts_with_not } from "../../../love/public/src/list_any_starts_with_not.mjs";
import { ebible_versions_english_full } from "../../../love/public/src/ebible_versions_english_full.mjs";
export async function ebible_versions_english_choices() {
  let object = await ebible_versions_english_full();
  let properties = properties_get(object);
  let excluded_prefixes = ["engweb", "eng-web"];
  let filter = function lambda4(property) {
    let any = list_any_starts_with_not(property, excluded_prefixes);
    return any;
  };
  let english_choices = list_filter(properties, filter);
  return english_choices;
}
