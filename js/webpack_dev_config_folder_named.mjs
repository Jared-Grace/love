import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_name_search_info } from "./app_shared_name_search_info.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_name_dev_text } from "./app_shared_name_dev_text.mjs";
import { folder_public_join } from "./folder_public_join.mjs";
import { repo_path_combine } from "./repo_path_combine.mjs";
export async function webpack_dev_config_folder_named(search) {
  "$plain search";
  "The folder one app's dev build is configured from, said beside the app's own settled name, both worked out from whatever word was used to reach the app.";
  "THE FOLDER IS HALF DERIVED FROM THE APP AND HALF FROM ITS REPOSITORY, because not every app lives in this one - the app's record holds which repository it came out of and nothing else does. Spelled out from the name alone, an app living elsewhere is looked for here and reported as never built.";
  "THE SETTLED NAME COMES BACK TOO, because the word handed in may be any word that reaches the app and every caller then needs the one the files are actually written under. Looked up twice, a caller could be reading a folder found from one spelling and a file named from another.";
  "It is one function rather than the same opening in the build and in the reading beside it, because a bundle's whereabouts and the build that writes it there have to agree or the reading answers about a file the build never touched.";
  arguments_assert(arguments, 1);
  let info = await app_shared_name_search_info(search);
  let repo_name = property_get(info, "repo_name");
  let a_name = property_get(info, "a_name");
  let folder = app_shared_name_dev_text();
  let public_dev = folder_public_join(folder);
  let config_folder = repo_path_combine(repo_name, public_dev);
  let r = {
    config_folder,
    a_name,
  };
  return r;
}
