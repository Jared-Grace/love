import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_dev_tools_open_verify_page_lines(r3) {
  arguments_assert(arguments, 1);
  let told = property_get(r3, "told");
  let engine = property_get(r3, "engine");
  let url = property_get(r3, "url");
  let lines = property_get(r3, "lines");
  let r = {
    told,
    engine,
    url,
    lines,
  };
  return r;
}
