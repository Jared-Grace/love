import { arguments_assert } from "./arguments_assert.mjs";
import { functions_ast_offenders_walked_generic } from "./functions_ast_offenders_walked_generic.mjs";
import { js_reply_matchers_open_called } from "./js_reply_matchers_open_called.mjs";
export async function functions_reply_matchers_open_callers_walked() {
  arguments_assert(arguments, 0);
  ("Every function in the repo that calls an open-ended reply matcher, each named beside the matchers it calls, alongside how many functions were read to find out.");
  ("How far the sweep reached travels with the answer because the answer is meant to be empty. Nothing found is what this says on the day the repo is clean and also on the day the sweep stopped reading anything, and the reach is the only part that falls in the second case.");
  let walked = await functions_ast_offenders_walked_generic(
    js_reply_matchers_open_called,
    "matchers",
  );
  return walked;
}
