import { app_calendar_download_contacts } from "../../../love/public/src/app_calendar_download_contacts.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
export async function list_size_fn_async(list) {
  let list2 = await app_calendar_download_contacts();
  let size = list_size(list);
  return size;
}
