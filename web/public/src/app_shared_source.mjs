import { webpack_build_generic_source } from "../../../love/public/src/webpack_build_generic_source.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_shared_name_search_info } from "../../../love/public/src/app_shared_name_search_info.mjs";
export async function app_shared_source(search) {
  let a = await app_shared_name_search_info(search);
  let f_name = property_get(a, "f_name");
  let joined = webpack_build_generic_source(f_name);
  return joined;
}
