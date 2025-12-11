import { marker } from "../../../love/public/src/marker.mjs";
import { list_join } from "../../../love/public/src/list_join.mjs";
export function js_code_join_comma_space(args) {
  marker("1");
  let v = list_join(args, ", ");
  return v;
}
