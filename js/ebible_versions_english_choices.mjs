import { properties_get } from "./properties_get.mjs";
import { list_filter_starts_with_not_multiple } from "./list_filter_starts_with_not_multiple.mjs";
import { ebible_versions_english_full } from "./ebible_versions_english_full.mjs";
export async function ebible_versions_english_choices() {
  let object = await ebible_versions_english_full();
  let properties = properties_get(object);
  let excluded_prefixes = ["engweb", "eng-web"];
  let english_choices = list_filter_starts_with_not_multiple(properties, excluded_prefixes);
  return english_choices;
}
