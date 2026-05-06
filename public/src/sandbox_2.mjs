import { text_index_of } from "../../../love/public/src/text_index_of.mjs";
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
  let item = "/t/";
  let index = text_index_of(t, item);
  json_equal_assert(v, filtered);
  return lookup;
}
