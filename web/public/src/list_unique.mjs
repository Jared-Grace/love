import { list_unique_set } from "../../../love/public/src/list_unique_set.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function list_unique(list) {
  marker("1");
  let found = list_unique_set(list);
  let unique = [...found];
  return unique;
}
