import { marker } from "../../../love/public/src/marker.mjs";
export function list_remove_start(list, delete_count) {
  list.splice(0, delete_count);
}
