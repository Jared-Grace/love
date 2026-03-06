import { json_to } from "../../../love/public/src/json_to.mjs";
import { openai_responses_cache } from "../../../love/public/src/openai_responses_cache.mjs";
import { mod } from "../../../love/public/src/mod.mjs";
import { list_filter_index } from "../../../love/public/src/list_filter_index.mjs";
import { list_split } from "../../../love/public/src/list_split.mjs";
import { list_filter_empty_not_is } from "../../../love/public/src/list_filter_empty_not_is.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { file_read_folder_user_split_normalize } from "../../../love/public/src/file_read_folder_user_split_normalize.mjs";
export async function sandbox() {
  const path = "David.txt";
  let separator = "---";
  let r = await file_read_folder_user_split_normalize(path);
  let normalized = property_get(r, "normalized");
  let filtered = list_filter_empty_not_is(normalized);
  let groups = list_split(filtered, separator);
  let m = 2;
  function lambda(item, index) {
    let r2 = mod(index, m);
    let r4 = r2 === 1;
    return r4;
  }
  let value = list_filter_index(groups, lambda);
  return value;
  let json = json_to({
    value,
  });
  let language = "Urdu";
  let r3 = await openai_responses_cache(
    "Translate the text inside the JSON object to " +
      language +
      ". Do not change any object keys.",
    json,
  );
  return r3;
}
