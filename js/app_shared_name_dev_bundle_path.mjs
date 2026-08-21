import { app_shared_name_prefixed } from "./app_shared_name_prefixed.mjs";
import { function_name_to_path_search } from "./function_name_to_path_search.mjs";
import { property_get } from "./property_get.mjs";
import { file_name_js } from "./file_name_js.mjs";
import { folder_public_join } from "./folder_public_join.mjs";
import { app_shared_name_dev_text } from "./app_shared_name_dev_text.mjs";
import { path_join } from "./path_join.mjs";
import { repo_path_combine } from "./repo_path_combine.mjs";
export async function app_shared_name_dev_bundle_path(a_name) {
  "Where one app's dev bundle sits, spelled the whole way down from the top of the disk, found by asking which repository holds that app rather than by assuming it is this one.";
  "The apps with a dev page are gathered from every repository here, and only some of them are in this one - so the folder an app's bundle is in is a fact about the app and cannot be worked out once and shared. Spelled relative, the word public/dev means whichever folder the reader happens to be standing in, which for an app living next door is a folder that will never hold its bundle.";
  "Nothing when no repository holds an app of that name, which is not a failure to look but an answer: a page can sit in the dev folder and be no app at all, written by hand with its script inside it, and there is then no bundle anywhere for it to be missing from.";
  let app_name = app_shared_name_prefixed(a_name);
  let r = await function_name_to_path_search(app_name);
  let exists = property_get(r, "exists");
  if (not(exists)) {
    return null;
  }
  let repo_name = property_get(r, "repo_name");
  let file = file_name_js(a_name);
  let folder = app_shared_name_dev_text();
  let dev_relative = folder_public_join(folder);
  let f_path = path_join([dev_relative, file]);
  let bundle = repo_path_combine(repo_name, f_path);
  return bundle;
}
