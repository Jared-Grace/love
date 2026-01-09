import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { file_js_parse } from "../../../love/public/src/file_js_parse.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export async function function_parse_unaliased_second(v) {
  let unaliased = object_property_get(v, "unaliased");
  let f_path = object_property_get(v, "f_path");
  let parsed_before = await file_js_parse(f_path);
  let parsed = object_merge(
    {
      unaliased,
    },
    parsed_before,
  );
  return parsed;
}
