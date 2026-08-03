import { js_code_function_shape } from "./js_code_function_shape.mjs";
import { equal } from "./equal.mjs";
export function js_codes_function_shape_same_is(one, other) {
  "whether two written-out functions do the same work, once the names only their own writer sees have been taken away";
  "This is the whole question every duplicate finder in the repo asks, so it is the honest thing to ask of the shaping rather than the text a shape happens to come out as. A shape written out in full would have to be rewritten every time the shaping learns to leave one more thing alone, and each of those rewrites is a chance to write down whatever the shaping now says instead of what it should say";
  let shape_one = js_code_function_shape(one);
  let shape_other = js_code_function_shape(other);
  let same = equal(shape_one, shape_other);
  return same;
}
