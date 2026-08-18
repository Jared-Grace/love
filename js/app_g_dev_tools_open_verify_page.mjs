import { property_get } from "./property_get.mjs";
import { app_g_dev_tools_open_verify_page_page } from "./app_g_dev_tools_open_verify_page_page.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function app_g_dev_tools_open_verify_page(r) {
  arguments_assert(arguments, 1);
  let told2 = property_get(r, "told");
  let engine2 = property_get(r, "engine");
  let url2 = property_get(r, "url");
  let lines2 = property_get(r, "lines");
  let r6 = {
    told: told2,
    engine: engine2,
    url: url2,
    lines: lines2,
  };
  let r22 = r6;
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
  let engine3 = property_get(r4, "engine");
  let url3 = property_get(r4, "url");
  let lines3 = property_get(r4, "lines");
  let r23 = property_get(r4, "r2");
  let told3 = property_get(r23, "told");
  let r3 = {
    engine: engine3,
    url: url3,
    lines: lines3,
    told: told3,
  };
  let r2 = r3;
  let told = await app_g_dev_tools_open_verify_page_page(r2);
  return told;
}
