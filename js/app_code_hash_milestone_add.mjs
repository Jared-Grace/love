import { app_code_milestone_left_is } from "./app_code_milestone_left_is.mjs";
import { app_code_milestone_key } from "./app_code_milestone_key.mjs";
import { app_code_milestone_hash_key } from "./app_code_milestone_hash_key.mjs";
import { app_shared_hash_add_on_screen } from "./app_shared_hash_add_on_screen.mjs";
import { fn_name } from "./fn_name.mjs";
export function app_code_hash_milestone_add(context, hash) {
  "Put the milestone this tab is on into the address, on the review's screen only - the same rule the review's own word keeps, for the same reason.";
  "Only while a milestone is what this tab picked last: a tab that has opened a milestone and then a review still holds the milestone's id, and writing it then would send a pasted link to the wrong checkpoint.";
  let left = app_code_milestone_left_is(context);
  if (left) {
    let key = app_code_milestone_key();
    let word = app_code_milestone_hash_key();
    app_shared_hash_add_on_screen(
      context,
      hash,
      fn_name("app_code_review"),
      key,
      word,
    );
  }
}
