import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_dev_tools_open_verify_page_told(r4) {
  arguments_assert(arguments, 1);
  let engine = property_get(r4, "engine");
  let url = property_get(r4, "url");
  let lines = property_get(r4, "lines");
  let r2 = property_get(r4, "r2");
  let told = property_get(r2, "told");
  let r = {
    engine,
    url,
    lines,
    told,
  };
  return r;
}
