import { arguments_assert } from "./arguments_assert.mjs";
import { bible_versions_commercial } from "./bible_versions_commercial.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function bible_versions_commercial_language(language_code) {
  "$plain language_code";
  "The folders of every translation in one language that this repo is free to ship and earn from, from whichever catalogue holds it.";
  arguments_assert(arguments, 1);
  let versions = await bible_versions_commercial();
  let matching = list_filter_property(versions, "language_code", language_code);
  let bible_folders = list_map_property(matching, "bible_folder");
  return bible_folders;
}
