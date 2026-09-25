import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_latest_public_folders } from "./app_shared_latest_public_folders.mjs";
import { property_get } from "./property_get.mjs";
import { folder_public_unlisted } from "./folder_public_unlisted.mjs";
import { path_join } from "./path_join.mjs";
import { repo_path_combine } from "./repo_path_combine.mjs";
export async function html_public_unlisted_folder(search) {
  "$plain search";
  "For one app named however anybody names it: its own name, the folder its checked build sits in, and the unlinked folder on the live site it is put in for one person to try. Reads folders and writes nothing.";
  "Named so that putting an app at the unlinked address and taking it away again ask the same lookup, and so cannot disagree about which folder that is.";
  arguments_assert(arguments, 1);
  let folders = await app_shared_latest_public_folders(search);
  let a_name = property_get(folders, "a_name");
  let repo_name = property_get(folders, "repo_name");
  let from_folder = property_get(folders, "from_folder");
  let public_relative = property_get(folders, "public_relative");
  let unlisted_name = folder_public_unlisted();
  let unlisted_relative = path_join([public_relative, unlisted_name]);
  let to_folder = repo_path_combine(repo_name, unlisted_relative);
  let r = {
    a_name,
    from_folder,
    to_folder,
  };
  return r;
}
