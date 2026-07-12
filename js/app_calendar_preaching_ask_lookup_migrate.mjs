import { app_calendar_facebook_conversation_url } from "./app_calendar_facebook_conversation_url.mjs";
import { object_map_self_value_to_property } from "./object_map_self_value_to_property.mjs";
import { app_calendar_preaching_ask_lookup_overwrite } from "./app_calendar_preaching_ask_lookup_overwrite.mjs";
import { app_calendar_preaching_ask_lookup_get } from "./app_calendar_preaching_ask_lookup_get.mjs";
export async function app_calendar_preaching_ask_lookup_migrate() {
  let lookup = await app_calendar_preaching_ask_lookup_get();
  let property = app_calendar_facebook_conversation_url();
  object_map_self_value_to_property(lookup, property);
  await app_calendar_preaching_ask_lookup_overwrite(lookup);
}
