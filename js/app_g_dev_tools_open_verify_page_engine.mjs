import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_dev_tools_open_verify_page_lines } from "./app_g_dev_tools_open_verify_page_lines.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_dev_tools_open_verify_page_engine(r3) {
  arguments_assert(arguments, 1);
  let r2 = app_g_dev_tools_open_verify_page_lines(r3);
  let lines = property_get(r2, "lines");
  let url = property_get(r2, "url");
  let engine = property_get(r2, "engine");
  let r = {
    r2,
    lines,
    url,
    engine,
  };
  return r;
}
