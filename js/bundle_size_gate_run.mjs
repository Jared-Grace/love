import { bundle_size_ceilings } from "./bundle_size_ceilings.mjs";
import { file_size } from "./file_size.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function bundle_size_gate_run() {
  ("QA gate: each small-by-design client page stays under its byte ceiling, so a");
  ("dependency-tree leak into a nav/docs bundle fails loud instead of shipping silently.");
  let ceilings = bundle_size_ceilings();
  async function measure(entry) {
    let name = property_get(entry, "name");
    let kib = property_get(entry, "kib");
    let limit = kib * 1024;
    let path = text_combine_multiple(["public/", name, ".js"]);
    let size = await file_size(path);
    let over = size > limit;
    let result = {
      name,
      size,
      limit,
      over,
    };
    return result;
  }
  let measured = await list_map_unordered_async(ceilings, measure);
  function over_lambda(m) {
    let over = property_get(m, "over");
    return over;
  }
  let violations = list_filter(measured, over_lambda);
  list_empty_is_assert_json(violations, {
    hint: "a small-by-design client page exceeded its byte ceiling — it likely imported an app's dependency tree; strip name-only deps with js_fn_name_references_to_calls, or move the heavy import out; adjust bundle_size_ceilings only for genuine growth",
  });
}
