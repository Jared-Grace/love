import { function_import_invoke } from "../../../love/public/src/function_import_invoke.mjs";
import { app_calendar_download_contacts } from "../../../love/public/src/app_calendar_download_contacts.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
export async function list_size_fn_async(list) {
  let file_path = await function_import_invoke(f_name);
  let list2 = await app_calendar_download_contacts();
  let size = list_size(list);
  return size;
}
