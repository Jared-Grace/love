import { function_unalias_exists_not } from "./function_unalias_exists_not.mjs";
import { assert_message } from "./assert_message.mjs";
export async function function_unalias_exists_not_assert(f_name) {
  let n = await function_unalias_exists_not(f_name);
  assert_message(
    n,
    "This unaliased function was expected not to exist yet. Would you like to choose a different name?",
  );
}
