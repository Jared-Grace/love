import { ebible_languages_versions } from "./ebible_languages_versions.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_squash } from "./list_map_squash.mjs";
export async function ebible_choices() {
  let languages = await ebible_languages_versions();
  function versions_get(language) {
    let versions = property_get(language, "versions");
    return versions;
  }
  let choices = list_map_squash(languages, versions_get);
  return choices;
}
