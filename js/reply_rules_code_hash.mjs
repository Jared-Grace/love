import { arguments_assert } from "./arguments_assert.mjs";
import { functions_closure_source_hash } from "./functions_closure_source_hash.mjs";
import { fn_name } from "./fn_name.mjs";
export async function reply_rules_code_hash() {
  arguments_assert(arguments, 0);
  ("One short word for all the code that decides what the reply rules say back to a message: the reading of a message and the building of the rules, with everything either one reaches. While it stays the same, the same message gets the same answer, so an answer kept under it can be handed back instead of worked out again.");
  let hash = await functions_closure_source_hash([
    fn_name("reply_attempt"),
    fn_name("app_shared_message_reply_choices"),
  ]);
  return hash;
}
