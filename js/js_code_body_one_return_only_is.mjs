import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { null_is } from "./null_is.mjs";
export function js_code_body_one_return_only_is(body) {
  "Whether a written-out function body hands something back in exactly one place, which is the shape of a getter and the first thing anything reading a getter's one value has to insist on.";
  "A body with two ways out was read by whichever return came first, so a function giving up part-way through and choosing its real value below was reported as the value it gives up with - and every site in the repo spelling that value would then have been offered a call to a function that mostly hands back something else. Both readers over getters, the one over written-out words and the one over numbers, made that same mistake, so the question they both ask stands here rather than being spelled twice and improved once.";
  "A return counted here is one standing at the start of its own line, which is every real one and no word inside a written-out sentence.";
  arguments_assert(arguments, 1);
  let returns = body.match(/^\s*return\b/gm);
  if (null_is(returns)) {
    let none = false;
    return none;
  }
  let one_return_only = equal(returns.length, 1);
  return one_return_only;
}
