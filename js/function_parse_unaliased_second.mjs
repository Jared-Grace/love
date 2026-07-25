import { object_merge_set } from "./object_merge_set.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
import { property_get } from "./property_get.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
export async function function_parse_unaliased_second(v) {
  "Refuse a name that names nothing, before asking where its file is. The lookup answers with exists set to false and simply leaves the path out, so reading the path next threw about a missing property - and the report of that failure printed the whole lookup, exists and all, without ever saying the one thing the reader needed: there is no function by this name. Two sweeps of sixty names were thrown away to a single dead name diagnosed from a stack trace.";
  let unaliased = property_get(v, "unaliased");
  let exists = property_get(v, "exists");
  true_is_assert_json(exists, {
    unaliased,
    hint: "there is no function with this name — was it renamed, deleted, or spelled differently?",
  });
  let f_path = property_get(v, "f_path");
  let parsed_before = await file_js_parse(f_path);
  let parsed = object_merge_set(
    {
      unaliased,
    },
    parsed_before,
  );
  return parsed;
}
