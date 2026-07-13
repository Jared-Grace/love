import { webpack_build_generic } from "./webpack_build_generic.mjs";
import { app_shared_name_dev_text } from "./app_shared_name_dev_text.mjs";
import { app_shared_name_search_info } from "./app_shared_name_search_info.mjs";
import { property_get } from "./property_get.mjs";
import { repo_path_combine } from "./repo_path_combine.mjs";
import { folder_public_join } from "./folder_public_join.mjs";
export async function webpack_build_dev(search) {
  let command_text_after = "";
  let info = await app_shared_name_search_info(search);
  let repo_name = property_get(info, "repo_name");
  let folder = app_shared_name_dev_text();
  let public_dev = folder_public_join(folder);
  let config_folder = repo_path_combine(repo_name, public_dev);
  let result = await webpack_build_generic(
    search,
    config_folder,
    command_text_after,
  );
  return result;
}
