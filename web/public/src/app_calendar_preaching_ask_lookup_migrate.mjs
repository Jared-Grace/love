import { object_values_map } from "../../../love/public/src/object_values_map.mjs";
import { app_calendar_preaching_ask_lookup_get } from "../../../love/public/src/app_calendar_preaching_ask_lookup_get.mjs";
export async function app_calendar_preaching_ask_lookup_migrate() {
  let lookup = await app_calendar_preaching_ask_lookup_get();
  function lambda(value, property) {}
  object_values_map(lookup, lambda);
}
