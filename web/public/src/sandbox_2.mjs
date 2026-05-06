import { list_add } from "../../../love/public/src/list_add.mjs";
import { app_calendar_contacts_initialize } from "../../../love/public/src/app_calendar_contacts_initialize.mjs";
import { file_json_transform } from "../../../love/public/src/file_json_transform.mjs";
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
    let contacts = app_calendar_contacts_initialize(data);
    function lambda(value, facebook_url_id) {
      let left = "/t/";
      const right = "/";
      let facebook_conversation_id = text_between(value, left, right);
      list_add(contacts, {
        facebook_conversation_id,
        facebook_url_id,
      });
    }
    each_object(lookup, lambda);
  }
  await file_json_transform(file_path_calendar, lambda2);
}
