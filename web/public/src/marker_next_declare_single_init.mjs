import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { exit } from "../../../love/public/src/exit.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { js_declare_single_init } from "../../../love/public/src/js_declare_single_init.mjs";
import { marker_next_get } from "../../../love/public/src/marker_next_get.mjs";
export function marker_next_declare_single_init(a) {
  let v = marker_next_get(a);
  let next = object_property_get(v, "next");
  let oe = js_declare_single_init(next);
  log({
    oe,
  });
  exit();
  return oe;
}
