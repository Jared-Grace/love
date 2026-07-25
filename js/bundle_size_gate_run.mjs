import { multiply } from "./multiply.mjs";
import { greater_than } from "./greater_than.mjs";
import { bundle_size_ceilings } from "./bundle_size_ceilings.mjs";
import { file_size } from "./file_size.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function bundle_size_gate_run() {
  "QA gate: each small-by-design client page stays under its byte ceiling, so a";
  "dependency-tree leak into a nav/docs bundle fails loud instead of shipping silently.";
  "Measures the dev bundle, never the promoted prod copy: prod only changes on a";
  "deliberate promote, so measuring it reports history and passes green while dev grows.";
  let ceilings = bundle_size_ceilings();
  async function measure(entry) {
    let name = property_get(entry, "name");
    let kib = property_get(entry, "kib");
    let limit = multiply(kib, 1024);
    let path = text_combine_multiple(["public/dev/", name, ".js"]);
    let size = await file_size(path);
    let over = greater_than(size, limit);
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
    hint: "a small-by-design client page exceeded its byte ceiling — it likely imported an app's dependency tree; strip name-only imports (the fn.name to marker inverse transform) or move the heavy import out; raise the ceiling only for genuine growth",
  });
}
