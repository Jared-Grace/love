import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { app_g_map_save } from "./app_g_map_save.mjs";
import { app_g_map_get } from "./app_g_map_get.mjs";
export async function app_g_rows_ensure(g) {
  let has = property_exists(g, "rows");
  if (has) {
    let rows = property_get(g, "rows");
    await app_g_map_save(rows);
    return;
  }
  let rows = await app_g_map_get();
  property_set(g, "rows", rows);
}
