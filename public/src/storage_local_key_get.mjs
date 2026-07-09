import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function storage_local_key_get(app_fn, key) {
  let ley = text_combine_multiple([app_fn.name, " ", key]);
  return ley;
}
