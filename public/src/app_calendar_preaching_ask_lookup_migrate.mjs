import { app_calendar_preaching_ask_lookup_overwrite } from "../../../love/public/src/app_calendar_preaching_ask_lookup_overwrite.mjs";
import { object_values_map_self } from "../../../love/public/src/object_values_map_self.mjs";
import { app_calendar_preaching_ask_lookup_get } from "../../../love/public/src/app_calendar_preaching_ask_lookup_get.mjs";
export async function app_calendar_preaching_ask_lookup_migrate() {
  let lookup = await app_calendar_preaching_ask_lookup_get();
  const property = "facebook_conversation_url";
  function lambda(value) {
    let r = {
      [property]: value,
    };
    return r;
  }
  object_values_map_self(lookup, lambda);
  await app_calendar_preaching_ask_lookup_overwrite(lookup);
}
