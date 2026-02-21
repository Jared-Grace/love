import { file_name_js } from "../../../love/public/src/file_name_js.mjs";
import { html_name_to_path_latest_generic } from "../../../love/public/src/html_name_to_path_latest_generic.mjs";
import { html_name_to_path_latest } from "../../../love/public/src/html_name_to_path_latest.mjs";
import { html_name_to_path } from "../../../love/public/src/html_name_to_path.mjs";
import { app_shared_name_prefixed } from "../../../love/public/src/app_shared_name_prefixed.mjs";
import { app_shared_name_search } from "../../../love/public/src/app_shared_name_search.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
import { app_shared_name_main } from "../../../love/public/src/app_shared_name_main.mjs";
export async function app_shared_name_search_info(search) {
  let a_name = await app_shared_name_search(search);
  let f_name = app_shared_name_main(a_name);
  let app_name = app_shared_name_prefixed(a_name);
  let f_path = html_name_to_path(a_name);
  let f_path_latest = html_name_to_path_latest(a_name);
  let src_path_latest = html_name_to_path_latest_generic(a_name, file_name_js);
  log_keep({
    search,
    a_name,
  });
  let info = {
    f_name,
    a_name,
    f_path,
    f_path_latest,
    app_name,
    src_path_latest,
  };
  return info;
}
