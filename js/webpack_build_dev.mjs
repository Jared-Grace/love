import { webpack_dev_config_folder_named } from "./webpack_dev_config_folder_named.mjs";
import { webpack_build_generic } from "./webpack_build_generic.mjs";
import { property_get } from "./property_get.mjs";
import { webpack_dev_chunks_clean } from "./webpack_dev_chunks_clean.mjs";
export async function webpack_build_dev(search) {
  "Builds the dev bundle for one app, clearing that app's old chunks first so nothing stale is left beside the new ones.";
  let words_after = [];
  let named = await webpack_dev_config_folder_named(search);
  let config_folder = property_get(named, "config_folder");
  let a_name = property_get(named, "a_name");
  await webpack_dev_chunks_clean(config_folder, a_name);
  let result = await webpack_build_generic(search, config_folder, words_after);
  return result;
}
