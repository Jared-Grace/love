import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { function_name_to_path_unalias } from "../../../love/public/src/function_name_to_path_unalias.mjs";
import { file_js_parse } from "../../../love/public/src/file_js_parse.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
export async function function_parse(f_name) {
  marker("1");
  const v = await function_name_to_path_unalias(f_name);
  let unaliased = object_property_get(v, "unaliased");
  let f_path = object_property_get(v, "f_path");
  let parsed = await file_js_parse(f_path);
  let to = object_merge(
    {
      unaliased,
    },
    parsed,
  );
  return to;
}
