import { app_shared_name_search_main } from "../../../love/public/src/app_shared_name_search_main.mjs";
import { file_delete_after } from "../../../love/public/src/file_delete_after.mjs";
export async function webpack_build(search) {
  let f_name = await app_shared_name_search_main(search);
  async function lambda() {}
  let result = await file_delete_after(lambda, temp_path);
}
