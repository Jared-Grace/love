import { folder_read_htmls } from "./folder_read_htmls.mjs";
import { folder_public_join } from "./folder_public_join.mjs";
import { app_shared_name_dev_text } from "./app_shared_name_dev_text.mjs";
import { repos_paths_map_unordered_combine_squash } from "./repos_paths_map_unordered_combine_squash.mjs";
export async function apps_paths_dev() {
  ("the dev folder, not public: public also holds pages that are no app at all, and only an app has a bundle to build");
  let folder = folder_public_join(app_shared_name_dev_text());
  let aps = await repos_paths_map_unordered_combine_squash(
    folder,
    folder_read_htmls,
  );
  return aps;
}
