import {js_declare_single_init} from "./js_declare_single_init.mjs";
import {marker_next_get} from "./marker_next_get.mjs";
export function marker_next_declare_single_init(a) {
  let {next} = marker_next_get(a);
  let oe = js_declare_single_init(next);
  return oe;
}
