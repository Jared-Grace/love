import { global_import_get } from "../../../love/public/src/global_import_get.mjs";
import { global_import_exists } from "../../../love/public/src/global_import_exists.mjs";
import * as acorn from "acorn";
export function module_acorn_get() {
  let a = null;
  let module_name = "acorn";
  let e = global_import_exists(module_name);
  if (e) {
    a = global_import_get(module_name);
  } else {
    a = acorn;
  }
  return a;
}
