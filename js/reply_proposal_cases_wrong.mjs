import { fn_name } from "./fn_name.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_run_fresh_args } from "./function_run_fresh_args.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
export async function reply_proposal_cases_wrong(title) {
  arguments_assert(arguments, 1);
  ("The worked messages of one waiting change to the reply rules whose claimed answer is not what the rules would answer once the change went in, each with the answer it would really get.");
  ("The gate and the review screen both ask this, so a change the screen marks wrong is the change the gate fails, and the other way about.");
  let results = await function_run_fresh_args(
    fn_name("reply_proposal_cases_attempts"),
    [title],
  );
  function wrong_is(one) {
    let ok = property_get(one, "ok");
    let n = not(ok);
    return n;
  }
  let wrong = list_filter(results, wrong_is);
  return wrong;
}
