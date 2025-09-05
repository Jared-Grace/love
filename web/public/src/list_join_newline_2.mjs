import { marker } from "./marker.mjs";
import { list_join } from "./list_join.mjs";
import { newline } from "./newline.mjs";
export function list_join_newline_2(list) {
  marker("1");
  let separator = newline();
  let joined = list_join(list, separator + separator);
  return joined;
}
