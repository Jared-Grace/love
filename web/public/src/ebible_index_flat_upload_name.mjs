import { list_join_slash_forward } from "../../../love/public/src/list_join_slash_forward.mjs";
import { ebible_index_upload_name } from "../../../love/public/src/ebible_index_upload_name.mjs";
export function ebible_index_flat_upload_name() {
  let v = ebible_index_upload_name();
  let file_name = list_join_slash_forward([v, "flat"]);
  return file_name;
}
