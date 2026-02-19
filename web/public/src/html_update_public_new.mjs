import { html_name_to_path } from "../../../love/public/src/html_name_to_path.mjs";
import { app_shared_name_prefixed } from "../../../love/public/src/app_shared_name_prefixed.mjs";
import { app_shared_name_search } from "../../../love/public/src/app_shared_name_search.mjs";
export async function html_update_public_new() {
  let search = "rce";
  let name = await app_shared_name_search(search);
  let a_name = app_shared_name_prefixed(name);
  let file_path = html_name_to_path(name);
}
