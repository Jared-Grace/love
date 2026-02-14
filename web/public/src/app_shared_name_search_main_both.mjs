import { app_shared_name_search } from "../../../love/public/src/app_shared_name_search.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
import { app_shared_name_main } from "../../../love/public/src/app_shared_name_main.mjs";
export async function app_shared_name_search_main_both(search) {
  let a_name = await app_shared_name_search(search);
  let f_name = app_shared_name_main(a_name);
  log_keep({
    search,
    a_name,
  });
  let r = {
    f_name,
    a_name,
  };
  return r;
}
