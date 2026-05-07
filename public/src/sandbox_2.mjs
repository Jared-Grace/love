import { app_calendar_facebook_conversation_url } from "../../../love/public/src/app_calendar_facebook_conversation_url.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_calendar_preaching_ask_lookup_get } from "../../../love/public/src/app_calendar_preaching_ask_lookup_get.mjs";
import { app_calendar_contact_add } from "../../../love/public/src/app_calendar_contact_add.mjs";
import { file_json_transform_initialize_default } from "../../../love/public/src/file_json_transform_initialize_default.mjs";
import { app_calendar_secret_path } from "../../../love/public/src/app_calendar_secret_path.mjs";
import { text_between } from "../../../love/public/src/text_between.mjs";
import { each_object } from "../../../love/public/src/each_object.mjs";
export async function sandbox_2() {
  let lookup = await app_calendar_preaching_ask_lookup_get();
  let file_path_calendar = app_calendar_secret_path();
  async function lambda2(data) {
    function lambda(value, facebook_url_id) {
      let property = app_calendar_facebook_conversation_url();
      let value2 = property_get(data, property);
      let left = "/t/";
      const right = "/";
      let facebook_conversation_id = text_between(value, left, right);
      const item = {
        facebook_conversation_id,
        facebook_url_id,
      };
      app_calendar_contact_add(data, item);
    }
    each_object(lookup, lambda);
  }
  await file_json_transform_initialize_default(file_path_calendar, lambda2);
}
