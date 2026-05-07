import { log } from "../../../love/public/src/log.mjs";
import { app_calendar_contact_add } from "../../../love/public/src/app_calendar_contact_add.mjs";
import { file_json_transform_initialize_default } from "../../../love/public/src/file_json_transform_initialize_default.mjs";
import { app_calendar_secret_path } from "../../../love/public/src/app_calendar_secret_path.mjs";
import { text_between } from "../../../love/public/src/text_between.mjs";
import { each_object } from "../../../love/public/src/each_object.mjs";
import { file_read_json_exists_ensure } from "../../../love/public/src/file_read_json_exists_ensure.mjs";
import { folder_user_docs_path } from "../../../love/public/src/folder_user_docs_path.mjs";
export async function sandbox_2() {
  const file_name = "preaching_ask.lookup.json";
  let file_path = folder_user_docs_path(file_name);
  let lookup = await file_read_json_exists_ensure(file_path);
  let file_path_calendar = app_calendar_secret_path();
  async function lambda2(data) {
    function lambda(value, facebook_url_id) {
      let left = "/t/";
      const right = "/";
      let facebook_conversation_id = text_between(value, left, right);
      const item = {
        facebook_conversation_id,
        facebook_url_id,
      };
      log(sandbox_2.name, {
        item,
      });
      app_calendar_contact_add(data, item);
    }
    each_object(lookup, lambda);
  }
  await file_json_transform_initialize_default(file_path_calendar, lambda2);
}
