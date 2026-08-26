import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_asserts_dropped } from "./js_code_asserts_dropped.mjs";
import { js_codes_function_shape_same_is } from "./js_codes_function_shape_same_is.mjs";
export function js_codes_function_work_same_is(one, other) {
  arguments_assert(arguments, 2);
  ("Whether two written-out functions do the same work, counting a checking line as no difference.");
  ("The sibling next door answers the stricter question, and it is the right one wherever two functions are being reported as copies of each other. This is the looser one, and it is asked where the answer decides whether a run of lines may be pointed at a function that already exists: such a run has been living inside a longer function, which checked its arguments once at the top and never again, so the piece that comes out of it carries no checks at all. Held against the function it should call, the only difference is the checks that function makes - and refusing on that would refuse every pair the question was asked about.");
  ("Looser is still sound here, and that is a claim about what a check is rather than about how often this works. A check either lets the run continue unchanged or stops it, so adding one cannot alter what comes back; a call that now goes through a checked function is the same call with a guard in front of it. What it does change is that a wrong argument is now refused where before it went through, which is the direction nobody has to be protected from.");
  let one_dropped = js_code_asserts_dropped(one);
  let other_dropped = js_code_asserts_dropped(other);
  let same = js_codes_function_shape_same_is(one_dropped, other_dropped);
  return same;
}
