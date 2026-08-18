import { app_g_dev_tools_open_verify_page_page } from "./app_g_dev_tools_open_verify_page_page.mjs";
import { app_g_dev_tools_open_verify_page_told } from "./app_g_dev_tools_open_verify_page_told.mjs";
import { app_g_dev_tools_open_verify_page_engine } from "./app_g_dev_tools_open_verify_page_engine.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function app_g_dev_tools_open_verify_page(r) {
  arguments_assert(arguments, 1);
  let r22 = app_g_dev_tools_open_verify_page_lines(r);
  let lines = property_get(r22, "lines");
  let url = property_get(r22, "url");
  let engine = property_get(r22, "engine");
  let r5 = {
    r2: r22,
    lines,
    url,
    engine,
  };
  let r4 = r5;
  let r2 = app_g_dev_tools_open_verify_page_told(r4);
  let told = await app_g_dev_tools_open_verify_page_page(r2);
  return told;
}
