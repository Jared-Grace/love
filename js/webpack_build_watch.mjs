import { app_shared_name_dev_text } from "./app_shared_name_dev_text.mjs";
import { webpack_build_generic } from "./webpack_build_generic.mjs";
import { folder_public_join } from "./folder_public_join.mjs";
export async function webpack_build_watch(search) {
  let command_text_after = "--watch";
  let folder = app_shared_name_dev_text();
  let config_folder = folder_public_join(folder);
  let result = await webpack_build_generic(
    search,
    config_folder,
    command_text_after,
  );
  return result;
}
