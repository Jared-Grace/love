import { html_name_to_path_dev } from "./html_name_to_path_dev.mjs";
import { repo_path_combine } from "./repo_path_combine.mjs";
import { property_get } from "./property_get.mjs";
import { function_name_to_path_search } from "./function_name_to_path_search.mjs";
import { folder_public_join } from "./folder_public_join.mjs";
import { file_name_js } from "./file_name_js.mjs";
import { html_name_to_path_latest_generic } from "./html_name_to_path_latest_generic.mjs";
import { html_name_to_path_latest } from "./html_name_to_path_latest.mjs";
import { html_name_to_path } from "./html_name_to_path.mjs";
import { app_shared_name_prefixed } from "./app_shared_name_prefixed.mjs";
import { app_shared_name_search } from "./app_shared_name_search.mjs";
import { log_keep } from "./log_keep.mjs";
import { app_shared_name_main } from "./app_shared_name_main.mjs";
export async function app_shared_name_search_info(search) {
  let a_name = await app_shared_name_search(search);
  let f_name = await app_shared_name_main(a_name);
  let app_name = app_shared_name_prefixed(a_name);
  let r = await function_name_to_path_search(app_name);
  let repo_name = property_get(r, "repo_name");
  let f_path_relative = html_name_to_path(a_name);
  let f_path = repo_path_combine(repo_name, f_path_relative);
  let f_path_dev_relative = html_name_to_path_dev(a_name);
  let f_path_dev = repo_path_combine(repo_name, f_path_dev_relative);
  let f_path_latest_relative = html_name_to_path_latest(a_name);
  let f_path_latest = repo_path_combine(repo_name, f_path_latest_relative);
  let src_path_latest_relative = html_name_to_path_latest_generic(
    a_name,
    file_name_js,
  );
  let src_path_latest = repo_path_combine(repo_name, src_path_latest_relative);
  let file_name = file_name_js(a_name);
  let src_path_relative = folder_public_join(file_name);
  let src_path = repo_path_combine(repo_name, src_path_relative);
  log_keep(app_shared_name_search_info.name, {
    search,
    a_name,
  });
  let info = {
    f_name,
    a_name,
    repo_name,
    f_path,
    f_path_latest,
    f_path_dev,
    app_name,
    src_path_latest,
    src_path,
  };
  return info;
}
