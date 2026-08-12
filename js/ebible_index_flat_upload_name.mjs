import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
import { ebible_index_upload_name } from "./ebible_index_upload_name.mjs";
export function ebible_index_flat_upload_name() {
  "What a bible's flat index is called where it is kept: the flat one, among that bible's indexes.";
  "Said once rather than at each end, because the uploading and the downloading have to agree on it and neither is in a position to notice if they stop agreeing - a name spelled two ways gives a four-oh-four and no reason for it.";
  let v = ebible_index_upload_name();
  let file_name = list_join_slash_forward([v, "flat"]);
  return file_name;
}
