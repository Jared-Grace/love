import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_dev_tools_open_verify_engine } from "./app_g_dev_tools_open_verify_engine.mjs";
import { property_get } from "./property_get.mjs";
export async function app_g_dev_tools_open_verify_lines() {
  arguments_assert(arguments, 0);
  let r2 = await app_g_dev_tools_open_verify_engine();
  let engine = property_get(r2, "engine");
  let url = property_get(r2, "url");
  let lines = [];
  let r = {
    engine,
    url,
    lines,
  };
  return r;
}
