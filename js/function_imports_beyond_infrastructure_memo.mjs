import { function_imports_beyond_infrastructure } from "./function_imports_beyond_infrastructure.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export async function function_imports_beyond_infrastructure_memo(
  f_name,
  remembered,
) {
  "what a function imports past the plumbing, kept in the object handed in so the same function is found on disk and parsed once however many walks arrive at it";
  "a walk from one root already meets each function once. the saving is across roots: every function in the repo sits on the same handful of small ones underneath, so asking the question for two hundred roots reads those over and over unless something remembers.";
  let known = property_exists(remembered, f_name);
  if (known) {
    let kept_before = property_get(remembered, f_name);
    return kept_before;
  }
  let kept = await function_imports_beyond_infrastructure(f_name);
  property_set(remembered, f_name, kept);
  return kept;
}
