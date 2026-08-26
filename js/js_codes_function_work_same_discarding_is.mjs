import { arguments_assert } from "./arguments_assert.mjs";
import { js_codes_function_work_same_is } from "./js_codes_function_work_same_is.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_visit_returns } from "./js_visit_returns.mjs";
import { js_code_product_dropped } from "./js_code_product_dropped.mjs";
export function js_codes_function_work_same_discarding_is(cut, existing) {
  arguments_assert(arguments, 2);
  ("Whether a run of lines cut out of a longer function does the same work as a function that already exists, counting what that function hands back as no difference when the run hands nothing back at all.");
  ("The two sides are not interchangeable and the parameter names are which is which. A run that keeps nothing may be pointed at a function that hands something back, because the value simply goes nowhere - the calling line binds no name for it. The other way round is a different matter entirely: a run that hands something back cannot be pointed at a function that hands nothing back, because the line that was reading that value would now be reading nothing. So the looser reading is asked in one direction only, and only after the strict one has already said no.");
  ("The run is taken to keep something if a return is written anywhere in it, including inside a function written inside it. That is stricter than the question really needs - an inner function's return is its own - and stricter is the safe way to be wrong here, since it refuses a pair rather than joining one it should not.");
  let same = js_codes_function_work_same_is(cut, existing);
  if (same) {
    return same;
  }
  let ast = js_parse(cut);
  let kept_is = false;
  function lambda() {
    kept_is = true;
  }
  js_visit_returns(ast, lambda);
  if (kept_is) {
    return false;
  }
  let dropped = js_code_product_dropped(existing);
  let same_dropped = js_codes_function_work_same_is(cut, dropped);
  return same_dropped;
}
