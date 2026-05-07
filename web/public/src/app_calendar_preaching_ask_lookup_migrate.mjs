import { object_map_self_value_to_property } from "../../../love/public/src/object_map_self_value_to_property.mjs";
import { app_calendar_preaching_ask_lookup_overwrite } from "../../../love/public/src/app_calendar_preaching_ask_lookup_overwrite.mjs";
import { app_calendar_preaching_ask_lookup_get } from "../../../love/public/src/app_calendar_preaching_ask_lookup_get.mjs";
export async function app_calendar_preaching_ask_lookup_migrate() {
  let lookup = await app_calendar_preaching_ask_lookup_get();
  object_map_self_value_to_property(lookup, "facebook_conversation_url");
  await app_calendar_preaching_ask_lookup_overwrite(lookup);
}
