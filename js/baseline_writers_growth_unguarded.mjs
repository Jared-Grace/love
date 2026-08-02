import { baseline_writers_names } from "./baseline_writers_names.mjs";
import { baseline_writers_growth_exempt } from "./baseline_writers_growth_exempt.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { function_imports } from "./function_imports.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter_text_includes } from "./list_filter_text_includes.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_add } from "./list_add.mjs";
export async function baseline_writers_growth_unguarded() {
  "audit: every ratchet writer that can record something the file did not already hold, because nothing in it refuses to grow";
  "a ratchet that can be rewritten in both directions is not a ratchet. the rewrite gets reached for at exactly the moment the gate goes red, which is the moment it was doing its job, so the one thing the writer must refuse is the one thing it is most likely to be asked for";
  "four of these said so in their own prose and did not do it. prose is not a check, and the gap sat there long enough for the family to grow around it, which is what a sweep is for";
  "what counts as refusing is importing something with growth assert anywhere in its name. the words are looked for inside the name rather than at the end of it, because the one every ratchet shares its comparison through ends in generic instead, and a check that asked for the ending called that writer an offender while it was doing exactly the right thing";
  "the question goes to the imports rather than to the whole reachable tree, because a writer that only reaches a refusal through three other functions is not refusing anything itself";
  "the ones allowed to grow are named next door with a reason each, rather than spotted by shape";
  let names = await baseline_writers_names();
  let exempt = baseline_writers_growth_exempt();
  let excused = list_map_property(exempt, "f_name");
  let offenders = [];
  for (let f_name of names) {
    let allowed = list_includes(excused, f_name);
    if (allowed) {
      continue;
    }
    let imports = await function_imports(f_name);
    let guards = list_filter_text_includes(imports, "growth_assert");
    let guarded = list_empty_not_is(guards);
    if (guarded) {
      continue;
    }
    list_add(offenders, f_name);
  }
  return offenders;
}
