import { list_size } from "../../../love/public/src/list_size.mjs";
import { app_replace_end_get } from "../../../love/public/src/app_replace_end_get.mjs";
export function app_replace_end_get_size(end3) {
  let end2 = app_replace_end_get(end3);
  let size = list_size(end2);
  return size;
}
