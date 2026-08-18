import { app_g_dev_tools_open_verify_page_page } from "./app_g_dev_tools_open_verify_page_page.mjs";
import { app_g_dev_tools_open_verify_page_told } from "./app_g_dev_tools_open_verify_page_told.mjs";
import { app_g_dev_tools_open_verify_page_engine } from "./app_g_dev_tools_open_verify_page_engine.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function app_g_dev_tools_open_verify_page(r) {
  arguments_assert(arguments, 1);
  let r4 = app_g_dev_tools_open_verify_page_engine(r);
  let r2 = app_g_dev_tools_open_verify_page_told(r4);
  let told = await app_g_dev_tools_open_verify_page_page(r2);
  return told;
}
