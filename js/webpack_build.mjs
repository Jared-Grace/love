import { webpack_build_generic } from "./webpack_build_generic.mjs";
import { app_shared_name_latest_text } from "./app_shared_name_latest_text.mjs";
import { folder_public_join } from "./folder_public_join.mjs";
export async function webpack_build(search) {
  let command_text_after = "";
  let folder = app_shared_name_latest_text();
  let config_folder = folder_public_join(folder);
  let result = await webpack_build_generic(
    search,
    config_folder,
    command_text_after,
  );
  return result;
}
