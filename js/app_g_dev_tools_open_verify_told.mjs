import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_dev_tools_open_verify_told(r2) {
  arguments_assert(arguments, 1);
  let lines = property_get(r2, "lines");
  let url = property_get(r2, "url");
  let engine = property_get(r2, "engine");
  let told = {};
  let r = {
    lines,
    url,
    engine,
    told,
  };
  return r;
}
