import { marker } from "./marker.mjs";
import { list_join } from "./list_join.mjs";
import { newline } from "./newline.mjs";
export function list_join_newline_2(waited2) {
  marker("1");
  let separator = newline();
  let code = list_join(waited2, separator);
  return code;
}
