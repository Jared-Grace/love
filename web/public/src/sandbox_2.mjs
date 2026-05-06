import { text_index_of_take } from "../../../love/public/src/text_index_of_take.mjs";
import { text_index_of_skip } from "../../../love/public/src/text_index_of_skip.mjs";
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
    let skipped = text_index_of_skip(value, left);
    let taken = text_index_of_take(skipped, right);
    log(sandbox_2.name, {
      taken,
    });
  }
  each_object(lookup, lambda);
  json_equal_assert(v, filtered);
}
