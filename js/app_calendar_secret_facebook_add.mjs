import { app_calendar_facebook_url_id } from "./app_calendar_facebook_url_id.mjs";
import { app_calendar_secret_transform } from "./app_calendar_secret_transform.mjs";
import { each_object } from "./each_object.mjs";
import { app_calendar_contact_add } from "./app_calendar_contact_add.mjs";
import { object_merge } from "./object_merge.mjs";
import { facebook_conversation_url_to_id } from "./facebook_conversation_url_to_id.mjs";
import { app_calendar_facebook_conversation_url } from "./app_calendar_facebook_conversation_url.mjs";
import { property_get_fn } from "./property_get_fn.mjs";
import { app_calendar_preaching_ask_lookup_get } from "./app_calendar_preaching_ask_lookup_get.mjs";
export async function app_calendar_secret_facebook_add() {
  let lookup = await app_calendar_preaching_ask_lookup_get();
  async function lambda2(data) {
    function lambda(value, facebook_url_id) {
      let conversation_url = property_get_fn(
        value,
        app_calendar_facebook_conversation_url,
      );
      let facebook_conversation_id =
        facebook_conversation_url_to_id(conversation_url);
      let item = {
        facebook_conversation_id,
        [app_calendar_facebook_url_id()]: facebook_url_id,
      };
      object_merge(value, item);
      app_calendar_contact_add(data, value);
    }
    each_object(lookup, lambda);
  }
  await app_calendar_secret_transform(lambda2);
}
