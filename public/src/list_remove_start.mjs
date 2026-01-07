import { marker } from "../../../love/public/src/marker.mjs";
import { list_splice } from "../../../love/public/src/list_splice.mjs";
export function list_remove_start(s) {
  marker("1");
  list_splice(list, 0, s);
}
