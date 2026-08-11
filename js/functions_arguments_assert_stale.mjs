import { arguments_assert } from "./arguments_assert.mjs";
import { functions_code_offenders_generic } from "./functions_code_offenders_generic.mjs";
import { js_code_arguments_assert_stale } from "./js_code_arguments_assert_stale.mjs";
export async function functions_arguments_assert_stale() {
  arguments_assert(arguments, 0);
  arguments_assert(arguments, 0);
  ("Every function whose line counting its arguments says a different number from the number of names it takes, each named beside the two numbers.");
  ("This breaks the function outright and says nothing until something calls it. The line throws on a correct call and the words it throws blame the caller, so the reading sends a reader at the wrong file - which is why it is worth finding by sweeping rather than by waiting.");
  ("The sweep around the question is the one every repo-wide question here uses, so a file that will not read is skipped out loud rather than counted as clean.");
  let offenders = await functions_code_offenders_generic(
    js_code_arguments_assert_stale,
    "stale",
  );
  return offenders;
}
