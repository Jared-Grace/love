import { function_exists_not } from "./function_exists_not.mjs";
import { assert_message } from "./assert_message.mjs";
export async function function_exists_not_assert(f_name) {
  let n = await function_exists_not(f_name);
  assert_message(n, "A function with this name was expected not to exist yet. Would you like to choose another name, or remove the existing one?");
}
