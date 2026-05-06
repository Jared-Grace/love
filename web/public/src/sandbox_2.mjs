import { app_calendar_contacts_initialize } from "../../../love/public/src/app_calendar_contacts_initialize.mjs";
import { file_json_transform } from "../../../love/public/src/file_json_transform.mjs";
import { app_calendar_secret_path } from "../../../love/public/src/app_calendar_secret_path.mjs";
import { text_between } from "../../../love/public/src/text_between.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { each_object } from "../../../love/public/src/each_object.mjs";
import { json_equal_assert } from "../../../love/public/src/json_equal_assert.mjs";
import { list_filter_text_includes } from "../../../love/public/src/list_filter_text_includes.mjs";
import { object_values } from "../../../love/public/src/object_values.mjs";
import { file_read_json_exists_ensure } from "../../../love/public/src/file_read_json_exists_ensure.mjs";
import { folder_user_docs_path } from "../../../love/public/src/folder_user_docs_path.mjs";
export async function sandbox_2() {
  const file_name = "preaching_ask.lookup.json";
  let file_path = folder_user_docs_path(file_name);
  let lookup = await file_read_json_exists_ensure(file_path);
  let v = object_values(lookup);
  let filtered = list_filter_text_includes(v, "/t/");
  function lambda(value, property) {
    let left = "/t/";
    const right = "/";
    let taken = text_between(value, left, right);
    log(sandbox_2.name, {
      taken,
      value,
      property,
    });
  }
  each_object(lookup, lambda);
  json_equal_assert(v, filtered);
  return;
  let file_path_calendar = app_calendar_secret_path();
  async function lambda2(data) {
    let contacts = app_calendar_contacts_initialize(data);
  }
  await file_json_transform(file_path_calendar, lambda2);
}
